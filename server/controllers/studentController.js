import Student from "../model/studentModel.js"
import mongoose from "mongoose"

//get all students
export const studentsList = async (req,res) =>{
    
    try {
       
        const list = await Student.find({})
        res.json(list)
        
    } catch (error) {
        res.json(error.message)
    }
 
}

//add students
export const createNewStudent = async (req,res) =>{
    
   
    const {name,age,course,completed}= req.body
   
    try {
       
       const existingStudent= await Student.findOne({name})
       if(existingStudent){
      
        return res.json({message:"Student is already exist"})
       }
     
        await Student.create({name,age,course,completed})
       
       res.json({message:"New student added successfully"})
        
    } catch (error) {
        res.json(error.message)
    }
  
 }

 //update students
 export const updateStudent = async (req,res) =>{
    
    const {name,age,course,completed}= req.body

  try {
    const isIdValid = mongoose.Types.ObjectId.isValid(req.params.id)
  
  if(isIdValid){
   
        const student= await Student.findByIdAndUpdate(req.params.id,{name,age,course,completed},{
            new:true
        })

    res.json({student,message:"student updated successfully"})
  }
  } catch (error) {
    res.json(error.message)
  }
 }

 //delete student
 export const deleteStudent =async (req, res) => {

    console.log(req.params.id)
    try {
         await Student.findByIdAndRemove({_id:req.params.id})
     
    } catch (error) {
        res.json(error.message)
    }
     };

     //get a student
     export const getStudent = async (req,res) =>{
    
        try {
            const student = await Student.findById(req.params.id)
            
            res.json(student)
            
        } catch (error) {
            res.json(error.message)
        }
     
    }