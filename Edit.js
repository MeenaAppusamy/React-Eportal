import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom';


function Edit() {
   const { id } = useParams();
   let move = useNavigate();
   const [formdata, setformdata] = useState({
      username: "",
      email: "",
      password: "",
      age: "",
      gender:"",
      mobile: "",
   

   });

   useEffect(() => {
      axios.get(`https://65c0d1efdc74300bce8ccab1.mockapi.io/eportal/${id}`)
         .then((response) => {
            console.log("my res",response.data);
            setformdata(response.data);
         })
         .catch((error) => {
            console.error('Error fetching product details:', error);
         });
   }, [id]);
   function handleChange(e) {
      const { name, value } = e.target;
      setformdata(prevData => ({
         ...prevData,
         [name]: value
      }));
   }

   function handleSubmit(e) {

      e.preventDefault();

      axios.put(`https://65c0d1efdc74300bce8ccab1.mockapi.io/eportal/${id}`, formdata)
         .then(() => {
            alert("user data is updated")
            return move('/register/viewdatas')
           
            
         })
         .catch((error) => {
            console.error('Error updating', error)
         })
   }


   return (
      <div>
         <div style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold' }}>
            Edit
            <Form style={{ height: '600px', width: '400px', border: '10px', borderColor: 'gray', borderRadius: '2px', position: 'absolute', left: '40%', marginTop: '30px' }} onSubmit={handleSubmit}>
               <Form.Group className="mb-3" controlId="Username">
                  <p style={{ textAlign: 'left', fontSize: '16px' }}>UserName</p>
                  <Form.Control type="text" placeholder="" value={formdata.username} name="username" onChange={handleChange} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="Email">
                  <p style={{ textAlign: 'left', fontSize: '16px' }}>Email</p>
                  <Form.Control type="text" placeholder="" value={formdata.email} name="email" onChange={handleChange} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="AGE">
                  <p style={{ textAlign: 'left', fontSize: '16px' }}>Age</p>
                  <Form.Control type="text" placeholder="" value={formdata.age} name="age" onChange={handleChange} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="GENDER">
                  <p style={{ textAlign: 'left', fontSize: '16px' }}>Gender</p>
                  <Form.Control type="text" placeholder="" value={formdata.gender} name="gender" onChange={handleChange} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="MOBILE">
                  <p style={{ textAlign: 'left', fontSize: '16px' }}>Mobile</p>
                  <Form.Control type="text" placeholder="" value={formdata.mobile} name="mobile" onChange={handleChange} />
               </Form.Group>

               <Button variant="primary" type={"submit"}>Submit</Button>

            </Form>
         </div>
      </div>
   )
}

export default Edit;