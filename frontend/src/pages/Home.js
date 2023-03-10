import React, { useEffect, useState } from 'react'
import { Table, Button, Row, Col } from 'react-bootstrap'
import Axios from "axios"
import { LinkContainer } from "react-router-bootstrap"
import Swal from 'sweetalert2'
const Home = () => {
    const [data,setData]=useState([])
useEffect(()=> { 
  const fetchData= async()=>{
    const {data}= await Axios.get("http://localhost:5000/api/students")
    setData(data)
    
  }
  fetchData()
},[])
const deleteHandler = (id) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then( (result)=>{
    if(result.isConfirmed){
       Axios.delete(`http://localhost:5000/api/students/${id}`)
      window.location.reload()
    }
   
  })
 
}
  return (
    <>
    <Row className='align-items-center'>
    <Col>
      <h1>Students List</h1>
    </Col>
    <Col className='text-right'>
    <LinkContainer to={"/create"}>
    <Button className='my-3' >
        <i className='fas fa-plus'></i> Add Student
      </Button>
    </LinkContainer>
     
    </Col>
  </Row>
  <Table striped bordered hover responsive className='table-sm'>
        <thead>
        
            <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Course completed </th>
            <th>Edit</th>
            <th>Delete</th>
           </tr>
        
          
        </thead>
        <tbody>
        {data.map(list=>{
            return(
                <tr key={list._id}>
                <td>{list.name}</td>
                <td>{list.age}</td>
                <td>{list.course}</td>
                <td>{list.completed}</td>
                <td>
                <LinkContainer to={`/edit/${list._id}`}>
                <Button
                   variant="light"
                   className="btn-sm "
                  >
                   <i className="fas fa-edit"></i>
                 </Button>
                </LinkContainer>
                
                </td>
                <td>
                <Button
                    variant="danger"
                    className="btn-sm "
                   onClick={()=>deleteHandler(list._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
            </tr>
            )
        })}
            
        </tbody>
        </Table>
        </>
  )
}

export default Home