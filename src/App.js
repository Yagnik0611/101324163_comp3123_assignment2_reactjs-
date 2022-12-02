
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

  return (
    <>

      <h1 className='App-header'>Employee Management App</h1>
   
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
