import express from 'express'
import cors from  'cors'
import cookieParser from 'cookie-parser'

/**
 * Express application instance.
 * @type {import('express').Express}
 */
const app=express()

/* WE are using cors because there will be some Chit-Chatting btw Front end and Backend
   so we use it inoder to remove cors error just like 
   how we used Cors in FrontEnd in Vite.config file where we used  
   server:{
    proxy:{
      '/api':'http://localhost:3000/'
    }
  },

*/
app.use(cors({
    origin:process.env.CORS_ORIGIN, // From where the data Should come generally Frontend so We give front end URL
    credentials:true
}))

app.use(express.json({limit:"1mb"})) // When Front-End  gives us the Json file to accept it we use this method and limit is set 
app.use(express.urlencoded({extended:true}))  /* This is used to ensure that our URL is encoded like url https://www.youtube.com/shorts/0JUOLk-Uj1Y to do it
                                                  Basically used to encode data in URL 
                                                  here we used extended is true so that we can encode 
                                                  nested objects */
app.use(express.static("public")) // we use this inorder to store files of some pic, pdfs    etc and all that on server use some folder here we have given that folder name 
app.use(cookieParser())

//routes 
import userRouter from './routes/user.routes.js'

// Routes declartion 
app.use("/api/v1/users",userRouter) /*  
                                        this is a middleware whenever the user goes to this URL
                                        then userRouter gets Activated and pass the control to 
                                        usercontoller {registerUser} method 
                                    */
// http://localhost:8000/api/v1/users/register

export {app}