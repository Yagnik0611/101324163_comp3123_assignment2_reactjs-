

import React, { Component } from 'react'

 const INITIAL_VALUE ={
    username:"",
    password:""

}
const loginStatus ={
    loginStatus : ""
}
export class Login extends Component {

    constructor(props){
        super(props)
        this.state={
           ...INITIAL_VALUE,
           loginStatus
           
           
        }
    }
    onValueChanged =(event)=>{
      
        this.setState({[event.target.name]:event.target.value})
        
       
    }
    onSubmitLogin = (event)=>{
        event.preventDefault()
       
       
//https://101324163-comp-3123-assignment1-backend.vercel.app/
//http://localhost:3001/api/user/login

        fetch("https://101324163-comp-3123-assignment1-backend.vercel.app/api/user/login",
        {
        method:"POST",
      
        headers:{"content-type":"application/json"},
        body:JSON.stringify(this.state)
        
      }).then((res)=>{
        console.log(res)
       if (res.status === true || res.ok === true){
        
        this.setState({loginStatus: true})
        window.location.replace('/employee/viewemp')
        console.log(this.state)

       }
       console.log(this.state.loginStatus)
      
          localStorage.removeItem("token");
      
       
      
        return res.json();
      
    }).then((resp) => {

    
     localStorage.setItem("token","Bearer " +resp.accessToken)
        
        
      }).catch((err)=>{
      console.error(err)
      })
     

    }
    
  render() {
    return (
        <>
        
<div className='login'>
    <form className="container">
    <h3 >Login </h3>
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
       { this.state.loginStatus == false &&(<span className='text-danger'> Invalid Username Or password</span>) }
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
    <button  onClick={this.onSubmitLogin} className="btn btn-primary" type="submit" name="btnSubmit"> Submit </button>
    

      
    </div>
    <p className="forgot-password text-right">
      New User? <a href="/signup">Create Account</a>
    </p>
  </form>
  </div>
  </>
    )
  }
}



  


export default Login