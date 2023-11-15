import express from "express";
import { home, userSendMailApi } from "../controller/controller.js";
import { sendMailVerification } from "../helper/validations.js";
const router = express.Router();



router.get('/', home);
router.post('/api/send-mail', sendMailVerification, userSendMailApi);

export default router;