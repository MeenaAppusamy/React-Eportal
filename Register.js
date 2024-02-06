import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Login from './Login';

export default function Register(){
  let passCompenet  =useNavigate()
  const [formdata, setformdata] = useState({
      username: "",
      email: "",
      password: "",
      age: "",
      gender:"",
      mobile: ""
  });

  function handleChange(e) {
      const { name, value } = e.target;
      setformdata(prevData => ({
          ...prevData,
          [name]: value
      }));
  }

  const handleSubmit = (e) => {
      e.preventDefault();

      fetch('https://65c0d1efdc74300bce8ccab1.mockapi.io/eportal', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formdata)
      })
      .then(response => {
          if (response.ok) {
              alert("user data is added");
          } else {
              alert("user data not added");
          }
      })
      .catch(error => {
          console.error("Error:", error);
      });
  };
  


    return(
        <div className="Auth-form-container">
      <form  style={{position:'absolute',top:'20%'}} className="Auth-form " onSubmit={handleSubmit}>
        <div  className="Auth-form-content mt-10">
          <h3 className="Auth-form-title">Register</h3>
          <div className="form-group mt-3 pt-2">
        
            <label>Name</label>
            <input
              type="text"
              className="form-control mt-1"
              name='username'
              value={formdata.username}
              placeholder="Enter your name" onChange={handleChange}
             
              
            />
          </div>
          <br></br>
          <div className="form-group mt-3 pt-1">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              name='email'
              placeholder="Enter your email" onChange={handleChange}
              value={formdata.email}
            />
          </div>
          <br></br>

          <div className="form-group mt-3 pt-1">
            <label>Password</label>
            <input id="password"
              type="password"
              className="form-control mt-1"
              name='password'
              value={formdata.password}
              placeholder="Enter password" onChange={handleChange}
              
            />
          </div>
          <div className="form-group mt-3 pt-1">
            <label>Age</label>
            <input
              type="number"
              className="form-control mt-1"
              name='age'
              value={formdata.age}
              placeholder="Enter your age"  onChange={handleChange}
              
            />
          </div>
          <br></br>
          <div className="form-group mt-3 pt-1">
            <label>Gender</label>
            <input
              type="text"
              className="form-control mt-1"
              name='gender'
              value={formdata.gender}
              placeholder="Enter your gender"  onChange={handleChange}
              
            />
          </div>
          <br></br>
          <div className="form-group mt-3 pt-1">
            <label>Mobile</label>
            <input
              type="number"
              className="form-control mt-1"
              name='mobile'
              min={9}
              placeholder="Enter your Mobile"  onChange={handleChange}
              value={formdata.mobile}
            />
          </div>
          <div>
            <br></br>
             <button style={{alignSelf:'center',marginLeft:'60px'}} className="btn text-center align-center btn-primary mt-10 " type="submit">Submit
             
            </button>{ '      '}
            <button className="btn text-center align-center btn-warning mt-10  " type="text" onClick={()=>{return passCompenet('./viewdatas')}}>View Data
            </button>
            
          </div>
         
        </div>
      </form>
    </div>
    )

}