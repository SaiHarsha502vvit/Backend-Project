import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary_service.js"

const registerUser = asyncHandler(async(req,res)=>{  
    // here we are just writing logic for Register and using asyncHandler 
    

    const {username,email,fullname,password}=req.body      // get user details from frontend

    console.log("Email : ",email);

    if ([username,email,fullname,password].some(     // validation - not empty
        (field)=> field?.trim()==="")) 
    {
        throw new ApiError(400,"All fields are required...")
    }

    const existedUser= await User.findOne({     // check if user already exist - username , email
        $or:[{ username },{ email }]
    })
    if (existedUser) {
        throw new ApiError(409,"User with email or username already exists")
    }

    const avatarLocalPath=req.files?.avatar[0]?.path      // check for images , check for avatar 
    const coverImageLocalPath= req.files?.coverImage[0]?.path     // check for images , check for avatar 


    if (!avatarLocalPath) {
        throw new ApiError(400,"Avatar file is reqiured ")
    }

    const avatar=await uploadOnCloudinary(avatarLocalPath)     // upload them to cloudinary , avatar 

    const coverImage=await uploadOnCloudinary(coverImageLocalPath)     // upload them to cloudinary , avatar 


    if (!avatar) {
        throw new ApiError(400,"Avatar file is reqiured ")
    }


   const user = await User.create({      // create user object - create entry in db 
        fullname,
        avatar:avatar.url,
        coverImage:coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase() 
    })


    await User.findById(user._id).select(      // remove password and refresh token field  from response 

        "-password -refreshToken"
    )

    // check for user response 
    // return res
})



export {registerUser};

