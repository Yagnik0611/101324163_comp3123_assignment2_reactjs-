import React from 'react'
import { useParams  } from 'react-router-dom'
import { useEffect, useState  } from "react";
import { Link, useNavigate  } from "react-router-dom";

const DetailsEmp = () => {

  useEffect(() => {
    fetch('http://localhost:3001/api/emp/employees/' + empid, {
        method: 'GET',
       mode:"cors"
       }).then((res) => {
        return res.json();
     }).then((resp) => {
      
       empdatachange(resp)
         
     }).catch((err) => {
        console.log(err.message);
        
     })
   }, [])
const {empid }= useParams();
const [empdata, empdatachange] = useState(null);


  return (
    <>
      <h1 style ={{background:"#282c34"}} className='text-center   text-white'> EMPLOYEE DETAILS</h1>
    <div className="jumbotron .bg-secondary ">
    
        <div style ={{background:"#808080"}} className="container p-3 my-3  text-white">
          {empdata &&
                    <div>
                        <h2>First Name :<b><em> { empdata.first_name.toUpperCase() }</em></b> </h2>
                        <h3>Last Name :<b> <em>{empdata.last_name.toUpperCase() }</em></b>  </h3>
                        
                        <u><h3><em>Contact Details</em></h3></u>
                        <h4>Email    : <em>{empdata.email.toUpperCase() }</em></h4>
                      
                        <h4>Salary   :<em> {empdata.salary }</em></h4>
                        <h4>Gender   : <em>{empdata.gender.toUpperCase() }</em></h4>
                       
                    </div>
                 }

          <p>
            <a className="btn btn-danger" href="/" role="button">View Employee </a></p>
         
        </div>

      </div></>

  )
 }

export default DetailsEmp