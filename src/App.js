
import './App.css';

import {
  Router,
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import  ViewEmp  from './ViewEmp';
import CreateEmp from './CreateEmp';
import EditEmp from './EditEmp';
import DetailsEmp from './DetailsEmp';
import { useNavigate, useParams } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';


function App() {

const logout =()=>{
  localStorage.removeItem("token");
  window.location.replace('/')
}
  return (
    <>
 
      <div class="header">
  <h1>Employee Management App</h1>
  
</div>


<div class="navbar">
  <a href="/employee/viewemp" >View Employee</a>
  <a href="/employee/create">Add Employee</a>
  
  <a  href="/signup" class="right">Signup</a>
  <a   onClick={() => logout() }  class="right">LogOut</a>
  <a  href="/" >Login</a>

</div>
   
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}> </Route>
        <Route path="/signup" element={<Signup />}> </Route>

        <Route path="/employee/viewemp" element={<ViewEmp />}></Route>
        <Route path="/employee/create" element={<CreateEmp />}></Route>
        <Route path="/employee/edit/:empid" element={<EditEmp />}></Route>
        <Route path="/employee/details/:empid" element={<DetailsEmp />}></Route>

      </Routes>
    </BrowserRouter>
  
    </>
    
  );
  
}

export default App;
