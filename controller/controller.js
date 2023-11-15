import { validationResult } from "express-validator";
import { sendMail } from "../helper/sendMail.js";



export const home = (req, res) => {
    return res.json({
        status: 'success',
        message: 'Welcome'
    });
}


export const userSendMailApi = async (req, res) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({
                status: 'validationError',
                errors: errors
            });
        }

        const { name, email, mno, message } = req.body;
        const mailSubject = `${name} request`;
        const content = `<strong>Name: </strong><h1>${name}</h1> <strong>Email: </strong><p>${email}</p> <strong>Mobile Number:</strong><p>${mno}</p><strong>Message: </strong><h3>${message}</h3>`;
        const sendToEmail = process.env.OWNER_EMAIL;

        const responce = await sendMail(sendToEmail, mailSubject, content);

        if (!responce) {
            return res.json({
                status: 'error',
                message: 'Internal Server Error'
            });
        }

        console.log(responce);
        return res.json({
            status: 'success',
            info: responce.response,
            message: 'Mail Sent SuccessFullly We Will Got You Back'
        });
    } catch (error) {
        return res.json({
            status: 'error',
            message: error || 'Internal Server Error'
        });
    }
}