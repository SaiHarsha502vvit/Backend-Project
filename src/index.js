import { Error } from 'mongoose';
import databaseConnection from './db/db.js';
import dotenv from 'dotenv'
import express from 'express'

dotenv.config({
    path:'./env' /* we used this method inorder to load the env variables before execution of any file or code 
                    so that env variables are available for every file */
})


const app=express()

databaseConnection()
.then(()=>{
    app.on('error',()=>{
        console.log(`There is a small Error occured ${error}`)
        throw error
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`App is Listening in port ${process.env.PORT || 8000}`)
    })
})
.catch((error)=>{
    console.log(`MongoDb Connection Error `)
})




    
// import express from 'express';

// /* 
// First approach 
// here we used it Because sometimes we some errors may occur and 
//     we may not aware of it so we  use express listeners and 
//     listen to those errors and try to resolve it 

// const app=express()

// ;(async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`); 
//         // we used await and async for connection purpose
//         app.on("error",()=>{
//             console.log("ERROR ",error);
//             throw error
//         })
//         app.get('/ha',(req,res)=>{
//             res.send('<div><h1 style="background-color:red">Hello World</h1></div>');
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is Lisrening in PORT ${process.env.PORT}`);
//         })
//     }

   
//     catch(error)
//     {
//         console.error("Error :",error);
//         throw error
//     }
// })()

