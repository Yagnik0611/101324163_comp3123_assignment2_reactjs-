
import { useEffect, useState } from "react";
//import { Link, useNavigate } from "react-router-dom";
import AuthFail from "./AuthFail";

   

    // const LoadDetail = (id) => {
    //     const navigate = useNavigate();
    //     navigate("/employee/detail/" + id);
    // }
    // const LoadEdit = (id) => {
    //     const navigate = useNavigate();
    //     navigate("/employee/edit/" + id);
    // }
  const url1 =   `/employee/details/`
  const url2 =   `/employee/edit/`
const  ViewEmp=()=> {
    const [empdata, empdatachange] = useState(null);
    const [Authorization, setAuth] = useState("");
    useEffect(() => {
        fetch('https://101324163-comp-3123-assignment1-backend-yagnik0611.vercel.app/api/emp/employees', {
            method: 'GET',
             headers:{
            
                "Authorization":localStorage.getItem("token")
             },
           mode:"cors"
          }).then((res) => {
            console.log(res)
           if (res.status != 403){
            setAuth("true");
           }
           else setAuth("false");
            return res.json();
        }).then((resp) => {
           console.log(resp)
            empdatachange(resp);
        }).catch((err) => {
            console.log(err);
            
        })
    }, [])
      

     const  deleteEMp =(id)=> {
        console.log(id)
       
        if (window.confirm('Do you want to remove?')) {
            fetch("https://101324163-comp-3123-assignment1-backend-yagnik0611.vercel.app/api/emp/employees?eid=" + id, {
                method: "DELETE",
                mode:"cors"
            }).then((response) => {
                if (response.ok){
                    let json =  response.json();
                    alert('Removed successfully.')
                    window.location.reload();
                console.info(json);
                this.setState({ "project": json});
              } else {
                console.error("Problem: " + response.status.valueOf.toString.apply);
              }
              
          
            }).catch((err) => {
               console.log(err)
            })
        }
    }


        
    
    return (
        
        <>
          {Authorization != "false" ? (
           <>
            <div>
      <h1  className='text-center   text-black'> EMPLOYEE LIST</h1>
  
  <div className="container">
      <div className="card">
          
          <div className="card-body">
             
          
            
              <table className="table  table-bordered">
                  <thead className="bg-dark text-white">
                      <tr>
                          <td>ID</td>
                          <td>first_name</td>
                          <td>last_name</td>
                          <td>email</td>
                          <td>gender</td>
                          <td>Action</td>
                      </tr>
                  </thead>
                  <tbody>
                  {empdata &&
                          empdata.map(item => (
                              <tr key={item._id}>
                              <td>1</td>
                          <td>{item.first_name}</td>
                          <td>{item.last_name}</td>
                          <td>{item.email}</td>
                          <td>{item.gender}</td>
                          <td> <div className="d-flex justify-content-around">
                                      <a href={url2+item._id} className="btn btn-success">Edit</a>
                                      <a onClick={(e) => deleteEMp(item._id)} className="btn btn-danger">Remove</a>
                                      <a  href={url1+item._id} className="btn btn-primary">Details</a>
                                      </div>
                          </td>    

                                 
                      </tr>
                          ))
                      }

                  </tbody>

              </table>
          </div>
      </div>
  </div> </div></>
       
      ) : <AuthFail/>}
    </> 
   
                
       
        
        
         
    
    );
}
export default ViewEmp;