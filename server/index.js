import express from "express"
import dotenv from "dotenv"
import connectdB from "./config/db.js"
import studentRoutes from "./routes/studentRoutes.js"
import cors from "cors"
const app =express()
dotenv.config()
connectdB()

const corsOptions ={
    origin:"http://localhost:3000", 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
  }



  app.use(cors(corsOptions))
  app.use(express.json())
  app.use('/api/students',studentRoutes)

const PORT= process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})