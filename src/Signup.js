

import React, { Component } from 'react'

const INITIAL_VALUE ={
   username:"",
   password:"",
   email:""


}
const error ={
    username:"",
    email:"",
    password:"",
  }
const SignupStatus ={
   SignupStatus : ""
}
export class Signup extends Component {

   constructor(props){
       super(props)
       this.state={
          ...INITIAL_VALUE,
          SignupStatus,
          error,
          
          
       }
   }
   onValueChanged =(event)=>{
     
       this.setState({[event.target.name]:event.target.value})
       
      
   }
   onSubmitSignup = (event)=>{
       event.preventDefault()
      
      
//https://101324163-comp-3123-assignment1-backend.vercel.app

       fetch("https://101324163-comp-3123-assignment1-backend.vercel.app/api/user/signup",
       {
        method:"POST",
        headers:{
            
          //"Authorization":localStorage.getItem("token"),
          "content-type":"application/json"
       },
       
        body:JSON.stringify(this.state)
        
      }).then((res)=>{

        if (res.status === true || res.ok === true){
        
            this.setState({SignupStatus: true})
            alert('Added successfully.')
         
            window.location.replace('/')
            console.log(this.state)
    
           }
      
       console.log(this.state)
        return res.json();
      
    }).then((resp) => {
     //console.log(resp.errors)

     this.setState({error:resp.errors})
        
        console.log(resp)
        
      }).catch((err)=>{
      console.error(err.message)
      })
    }
   
 render() {
   return (
       <>
       
<div className='signup'>
   <form className="container">
   
  {this.state.SignupStatus?.type === "true" &&  (
  <div class="alert alert-success">
    <span><strong>Success!</strong> Indicates a successful or positive action.</span>
    </div>)}
 

   <h3 >Signup </h3>
  
   <div className="mb-3">
     <label>Username</label>
     <input
      value ={this.state.username} 
       onChange={event=>this.onValueChanged(event)} 
      name ="username"
      type="text" 
       
       className="form-control"
       placeholder="Enter Username"
     />
      <span className='text-danger'> { this.state.error.username}</span>
   </div>

   <div className="mb-3">
     <label>Email</label>
     <input
      value ={this.state.email} 
       onChange={event=>this.onValueChanged(event)} 
      name ="email"
      type="text" 
       
       className="form-control"
       placeholder="Enter Email"
     />
      <span className='text-danger'> {  this.state.error.email}</span>
   </div>
   <div className="mb-3">
     <label>Password</label>
     <input
     value ={this.state.password} 
     onChange={event=>this.onValueChanged(event)} 
      name ="password"
     
       type="password"
       className="form-control"
       placeholder="Enter password"
     />
      <span className='text-danger'> { this.state.error.password}</span>
      {this.state.SignupStatus=== false &&(<span className='text-danger'> Invalid Username Or password</span>) }
   </div>
   <div className="mb-3">
     <div className="custom-control custom-checkbox">
       <input
         type="checkbox"
         className="custom-control-input"
         id="customCheck1"
       />
       <label className="custom-control-label" htmlFor="customCheck1">
         Remember me
       </label>
     </div>
   </div>
   <div className="d-grid">
   <button  onClick={this.onSubmitSignup} className="btn btn-primary" type="submit" name="btnSubmit"> Sign up  </button>
   

     
   </div>
   <p className="forgot-password text-right">
     Already user? <a href="/">login?</a>
   </p>
 </form>
 </div>
 </>
   )
 }
}



 


export default Signup