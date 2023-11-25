
import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();
const { SMTP_PASS, SMTP_EMAIL } = process.env;
console.log(process.env.SMTP_EMAIL, process.env.SMTP_PASS);

export const sendMail = async (email, mailSubject, content) => {
    try {
        const transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: SMTP_EMAIL,
                pass: SMTP_PASS,
            }
        });

        const mailOptions = {
            from: SMTP_EMAIL,
            to: email,
            subject: mailSubject,
            html: content
        }

        const info = await transport.sendMail(mailOptions);

        // Return the response object
        return info;
    } catch (err) {
        return err;
    }
};
