import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router(); // Created a router
console.log("Hello we are in user route ...."); //for checking purpose
router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ]), 
    registerUser); // if the client is going into /register then move the control to registerUser contoller

export default router;
