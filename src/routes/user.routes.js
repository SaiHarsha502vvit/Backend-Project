import { Router } from "express";
import registerUser from '../controllers/user.controller.js'

const router=Router()
console.log("Hello we are in user route ....")
router.route("/register").post(registerUser)

export default router