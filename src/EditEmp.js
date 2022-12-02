import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

const EditEmp = () => {

const {empid}= useParams();


const[first_name,firstchange]=useState("");
const[last_name,lastchange]=useState("");
const[gender,genderchange]=useState("");
const[salary,salarychange]=useState("");
const[email,emailchange]=useState("");

  
useEffect(() => {
  fetch('https://101324163-comp-3123-assignment1-backend-yagnik0611.vercel.app/api/emp/employees/' + empid, {
      method: 'GET',
     mode:"cors"
    }).then((res) => {
      return res.json();
  }).then((resp) => {
    
     
      firstchange(resp.first_name);
      lastchange(resp.last_name);
      genderchange(resp.gender);
      salarychange(resp.salary);
      emailchange(resp.email);

      
      
      
  }).catch((err) => {
      console.log(err.message);
      
  })
}, [])
  
const navigate=useNavigate();

const handlesubmit=(e)=>{

  e.preventDefault();
  const empdata={first_name,last_name,email,salary,gender};

  console.log(empdata)
  fetch("https://101324163-comp-3123-assignment1-backend-yagnik0611.vercel.app/api/emp/employees/" + empid,
  {
  method:"PUT",
  headers:{"content-type":"application/json"},
  body:JSON.stringify(empdata)
  
}).then((res)=>{
  alert('Saved successfully.')
  navigate('/employee/viewemp');
 
}).catch((err)=>{
  console.log(err.message)
})
}

  return (
    <>
    
    <div className="container h-100">
    <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6">
        
        <form className="row g-3" onSubmit={handlesubmit} >
  <div className="col-md-6">
    <label  classNameName="form-label">First Name</label>
    <input  value ={first_name} onChange={e=>firstchange(e.target.value)}  name ="first_name"type="text" className="form-control" />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Last Name</label>
    <input  value ={last_name}onChange={e=>lastchange(e.target.value)} name ="last_name" type="text" className="form-control" />
  </div>
  <div className="col-12">
    <label  className="form-label">Email</label>
    <input  value ={email}onChange={e=>emailchange(e.target.value)}  name ="email"type="email" className="form-control"  placeholder="1234 Main St"/>
  </div>
  <div className="col-md-6">
    <label className="form-label">Gender</label>
    <input type="text" className="form-control" value ={gender} onChange={e=>genderchange(e.target.value)} name ="gender"placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label  className="form-label">Salary</label>
    <input type="text" className="form-control" value ={salary}onChange={e=>salarychange(e.target.value)} name ="salary"/>
  </div>
  
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
 
 <button   className="btn btn-primary" type="submit" name="btnSubmit"> Submit </button>
   
  </div>
</form>


    </div>
    </div>
    </div>
    
    
    </>
  )
}

export default EditEmp