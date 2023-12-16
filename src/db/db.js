import mongoose from 'mogoose'
import { DB_NAME } from '../constants'


const connectDB=async ()=>{
    try {
        await mongoose.connect(`${process.env.PORT}`)
    } catch (error) {
        console.log("MongoDB Connection Error ",error);
        process.exit(1)
    }
}