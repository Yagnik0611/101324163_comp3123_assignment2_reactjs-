import React , {Component}from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import AuthFail from "./AuthFail";

const INITIAL_VALUE ={
    first_name:"",
    last_name:"",
    email:"",
    gender:"",
    salary:"",
    send:false

}
const auth ={
  Authorization :"false"
}
const error ={
  first_name:"",
  last_name:"",
  email:"",
  gender:"",
  salary:"",


}



export default class CreateEmp extends Component{
    constructor(props){
        super(props)
        this.state={
           ...INITIAL_VALUE,
           error,
           auth
           
        }
        
    
        
       
       
    }
    onLogin  = async ()=>{
    //  https://101324163-comp-3123-assignment1-backend.vercel.app/api/emp/employees
    //http://localhost:3001/api/user/login
      await fetch("https://101324163-comp-3123-assignment1-backend.vercel.app/api/user/login",
      {
      method:"GET",
      headers:{
          
          "Authorization":localStorage.getItem("token")
  },
      
    }).then((res)=>{
      if (res.status == 403){
        this.setState({Authorization:"true"})
       }

       this.setState({Authorization:"false"})
      return res.json();
    
  }).then((resp) => {
    
   console.log(resp)
  
      
      
      
    }).catch((err)=>{
    console.error(err)
    })
   

  }

    componentDidMount() {
 
    this.onLogin();

    }
    
   
    onSubmitLogin = (event)=>{
        event.preventDefault()
       
        

        console.log(this.state)
       
        

        fetch("http://localhost:3001/api/emp/employees",
        {
        method:"POST",
        headers:{
            
          //"Authorization":localStorage.getItem("token"),
          "content-type":"application/json"
       },
       
        body:JSON.stringify(this.state)
        
      }).then((res)=>{

       if (res.ok){
      
        window.location.replace('/employee/viewemp')
       }

      
       console.log(this.state)
        return res.json();
      
    }).then((resp) => {
     //console.log(resp.errors)
     this.setState({error:resp.errors})
        
        console.log(this.state.error)
        
      }).catch((err)=>{
      console.error(err.message)
      })
     

    }
    
    
    clearForm = (event)=>{
        
        event.preventDefault()
      this.setState({...INITIAL_VALUE})
    }

    onValueChanged =(event)=>{
      
        this.setState({[event.target.name]:event.target.value})
        
       
    }
    
    render= () =>{
   
      
        return(

          <>
    
       
          
           {this.state.auth.Authorization === "false" ? (  <>
    
            <h5 className='App-header2'>
                   <a  href="/employee/viewemp"className="btn btn-success">Home Page</a>
               </h5>
   
    <div className="container h-100">
    <div className="row h-100 justify-content-center align-items-center">
    
        <div className="col-10 col-md-8 col-lg-6">
        
        <form className="row g-3">
  <div className="col-md-6">
    <label  className="form-label">First Name</label>
    
    <input  value ={this.state.first_name} onChange={event=>this.onValueChanged(event)}  name ="first_name"type="text" className="form-control" />
    <span className='text-danger'> {this.state.error.first_name}</span>
  </div>
  <div className="col-md-6">
    <label  className="form-label">Last Name</label>
    <input  value ={this.state.last_name}onChange={event=>this.onValueChanged(event)} name ="last_name" type="text" className="form-control" />
    <span className='text-danger'> {this.state.error.last_name}</span>
  </div>
  <div className="col-12">
    <label  className="form-label">Email</label>
    <input  value ={this.state.email}onChange={event=>this.onValueChanged(event)}  name ="email"type="email" className="form-control"  placeholder="1234 Main St"/>
    <span className='text-danger'> {this.state.error.email}</span>
  </div>
  <div className="col-md-6">
    <label className="form-label">Gender</label>
    <input type="text" className="form-control" value ={this.state.gender}onChange={event=>this.onValueChanged(event)} name ="gender"placeholder="Apartment, studio, or floor"/>
    <span className='text-danger'> {this.state.error.gender}</span>
  </div>
  <div className="col-md-6">
    <label  className="form-label">Salary</label>
    <input type="text" className="form-control" value ={this.state.salary}onChange={event=>this.onValueChanged(event)} name ="salary"/>
    <span className='text-danger'> {this.state.error.salary}</span>
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
  <button  onClick={this.clearForm} className="btn btn-primary" type="submit" name="btnSubmit"   > Reset  </button> 
 <button  onClick={this.onSubmitLogin} className="btn btn-primary" type="submit" name="btnSubmit"> Submit </button>
   
  </div>
</form>


    </div>
    </div>
    </div>
    
    
 

</>
       ) : <AuthFail/>}
     </> 
        

   
    )
        

}
}