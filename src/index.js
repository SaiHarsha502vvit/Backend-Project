import mongoose from 'mogoose'
import { DB_NAME } from './constants';


/*  
    First approach 
import express from 'express';
const app=express()

;(async()=>{
    try{
        await mongoose.connect(`${process.env.MOGODB_URL}/${DB_NAME}`);
        app.on("error",()=>{
            console.log("ERROR ",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is Lisrening in PORT ${process.env.PORT}`);
        })
    }

   
    catch(error)
    {
        console.error("Error :",error);
        throw error
    }
})()

*/