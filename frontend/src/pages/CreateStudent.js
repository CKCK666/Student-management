import React,{useState} from 'react'
import styled from "styled-components";
import Axios from "axios"
import Swal from 'sweetalert2'

const CreateStudent = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [course, setCourse] = useState("")
    const [completed, setCompleted] = useState("");
    
    const submitHandler=async (e) =>{
        e.preventDefault()
        await Axios.post("http://localhost:5000/api/students/create",{name,age,course,completed})
        Swal.fire({
          position: 'top-centre',
          icon: 'success',
          title: 'New student added',
          showConfirmButton: false,
          timer: 2500
        })
        window.location.reload()
    }
  return (
    <StyledCreateProduct>
    
    <StyledForm onSubmit={submitHandler}>
      <h3>Add new student</h3>
   
       <input
        type="text"
        placeholder="Name"
       onChange={(e)=>{setName(e.target.value)}}
        required
      />
     
      <input
        type="number"
        placeholder="Age"
        onChange={(e)=>{setAge(e.target.value)}}
        required
      />
      <input
        type="text"
        placeholder="Course"
        onChange={(e)=>{setCourse(e.target.value)}}
        required
      />
      <input
        type="number"
        placeholder="Course completed year"
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

export default CreateStudent


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