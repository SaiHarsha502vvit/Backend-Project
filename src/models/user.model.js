import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
const userSchema= new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar :{
        type:String, // Cloudinary url
        required:true
    },
    coverImage :{
        type:String, // Cloudinary url
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
        /* Special Type Used for Fetching Other Schema Properties
            Here We used this to Get any of the Schema 
            And After that we used 
            ref :"Video" Where we are specifing the Schema 
            the type should take  
      */
    ],
    password:{
        type:String,
        required:[true,'password is required']
    },
    refreshToken:{
        type:String
    }

    },
    {
        timestamps:true
     /* 
        Mongoose schemas support a timestamps option.
        If you set timestamps: true, Mongoose will add two properties of type Date to your schema:
        createdAt: a date representing when this document was created
        updatedAt: a date representing when this document was last updated
    */
    }
)

userSchema.pre("save",async function (next)
{
    /* 
        Here in pre hook nothing but function
        we do not use CallBack Funcion ()=>{}
        beacause we are not aware of context in 
        callback function context means --> this. <--


        and use async because the Encryption takes time 

        and used next beacause this is a middleware function 
        so after saving we call next middleware function  

        so every time we change any piece of the userSchema 
        the password hashes itself so 

        we used (!this.isModified('password'))
        this means if password is not modified then 
        go to next 

        else 
            encypt the password
    */
    if(!this.isModified('password')) return next();
    this.password=bcrypt.hash(this.password,10)
    next()
})


userSchema.methods.isPasswordCorrect = async function(password)
{
    return await bcrypt.compare(password,this.password)
}

export default User = mongoose.model("User",userSchema)
/* Here the Important Thing is we Export this thing 
   and We use this in other files Rather than Getting it Mongodb Database
   and In the Mongodb Database the DataBase name Will be in 
   
   "users" which is lowerCase and Plural    */