import React,{useState,useEffect} from 'react'
import styled from "styled-components";
import  Axios from 'axios';
import {useParams} from  "react-router-dom"
import Swal from 'sweetalert2'
const EditStudent = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [course, setCourse] = useState("")
  const [completed, setCompleted] = useState("")
 const params=useParams()
 const id=params.id
  useEffect(()=> { 
    const fetchData= async()=>{
      const {data}= await Axios.get(`http://localhost:5000/api/students/${id}`)
     setName(data.name)
     setAge(data.age)
     setCourse(data.course)
     setCompleted(data.completed)
      
    }
    fetchData()
  },[id])
  const submitHandler=async (e) =>{
    e.preventDefault()
    await Axios.put(`http://localhost:5000/api/students/edit/${id}`,{name,age,course,completed})
    Swal.fire({
      position: 'top-centre',
      icon: 'success',
      title: 'Student details edited successfully',
      showConfirmButton: false,
      timer: 2500
    })
     window.location.reload()
}
  return (
    <StyledCreateProduct>
       
    <StyledForm onSubmit={submitHandler}>
      <h3>Edit a Student</h3>
   
       <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        required
      />
     
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e)=>{setAge(e.target.value)}}
        required
      />
      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e)=>{setCourse(e.target.value)}}
        required
      />
      <input
        type="number"
        placeholder="Course completed year"
        value={completed}
        onChange={(e)=>{setCompleted(e.target.value)}}
        required
      />
         

      <PrimaryButton type="submit">
    submit
      </PrimaryButton>
    </StyledForm>
   
  </StyledCreateProduct>
  )
}

export default EditStudent;


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 2rem;
  select,
  input {
    padding: 7px;
    min-height: 30px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(182, 182, 182);
    margin: 0.3rem 0;
    &:focus {
      border: 2px solid rgb(0, 208, 255);
    }
  }
  select {
    color: rgb(95, 95, 95);
  }
`;

const StyledCreateProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;


const PrimaryButton = styled.button`
  padding: 9px 12px;
  border-radius: 5px;
  font-weight: 400;
  letter-spacing: 1.15px;
  background-color: #4b70e2;
  color: #f9f9f9;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0.5rem 0;
`;