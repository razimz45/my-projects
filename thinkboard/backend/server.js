import express from 'express';
import dotenv from 'dotenv';
import userRouter from './router/userRouter.js';
import connectDB from './config/db.js';
import cors from "cors"
const app=express()
dotenv.config()


connectDB()

app.use(cors())
app.use(express.json())
app.use('/api/notes',userRouter)

const PORT=process.env.PORT || 5001;

app.listen(PORT,()=>{
    console.log(`server runs on ${PORT} `)
})