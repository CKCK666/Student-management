import mongoose from "mongoose";


const studentSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    age:{
        type:Number,
        required:true,
       
    },
    course:{
        type:String,
        required:true,
        
    },
    completed:{
        type:Number,
        required:true,
       
    },
})

export default mongoose.model('Student', studentSchema)