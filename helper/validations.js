import { check } from "express-validator";

export const sendMailVerification = [
    check('name', 'Please Enter a Proper Name').not().isEmpty().isLength({ min: 2 }),
    check('email', 'Please Enter a Proper E-Mail').notEmpty().isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('mno', 'please Enter a Proper Mobile Number').notEmpty().isMobilePhone("any"),
    check('message', 'Message Should Not Be Empty Please Write SomeThing InIt').notEmpty().isLength({ min: 5 })
];