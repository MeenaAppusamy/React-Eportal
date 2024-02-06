import React,{useState,useEffect,button} from "react";
import { useNavigate, } from "react-router-dom";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
function ViewDatas(){
   const [userdata, setUserData] = useState([]);
   let move = useNavigate();

   useEffect(() => {
      axios.get('https://65c0d1efdc74300bce8ccab1.mockapi.io/eportal')
         .then((response) => {
            console.log("response is",response)
            if (!userdata) {
               return <h1 className="text-center"> User Details are Loading...</h1>;
           }
            setUserData(response.data);
            
         })
         .catch((error) => {
            console.log('Error:', error);
         });
   }, []); 
   

function handleDelete(id){
   console.log("id is",id)
    axios.delete(`https://65c0d1efdc74300bce8ccab1.mockapi.io/eportal/${id}`)
    .then((response) => {
        if(response.status===200){
            alert("Data is Delete")
            return move('/register/viewdatas')
        }
        else{
            console.error("Error:",response.statusText)
        }
     })

     .catch((error) => {
        console.log('Error:', error);
     }); 

}

 const update = useNavigate()
function handleUpdate(id){
update(`${id}`)
}

   return (
      <div>
      <h3 style={{textAlign:'center'}}>User Data</h3>
    <Table className="text-center p-5" striped bordered hover variant="light">
      <thead style={{width:'140px'}}>
        <tr>
          <th>S.No</th>
          <th>Username</th>
          <th>Email</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Mobile</th>
          <th>Actions</th>
          
         
        </tr>
      </thead>
      <tbody>
       {userdata.map((userdata,index)=>(
        <tr key={userdata.id}>
        <td>{index+1}</td>
        <td>{userdata.username}</td>
        <td>{userdata.email}</td>
        <td>{userdata.age}</td>
        <td>{userdata.gender}</td>
        <td>{userdata.mobile}</td>
       <td>
       <Button className='btn btn-info' onClick={()=>handleUpdate(userdata.id)}>Edit </Button>{'   '}
         <Button className='btn btn-danger' onClick={()=>handleDelete(userdata.id)}>Delete</Button>
       </td>
        </tr>

   ))}
      </tbody>
    </Table>
    </div>
  );
}

export default ViewDatas;