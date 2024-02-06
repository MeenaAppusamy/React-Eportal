import React, { useState,button } from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {
    let move = useNavigate();
   
   const [login,setLogin] = useState({
    
    email:"",
    password: "",
  
   })

   function handleChange(e) {
    const { name, value } = e.target;
    setLogin(prevData => ({
        ...prevData,
        [name]: value
    }));
}
 function handleSubmit(){

if(login.email==="meenaappusamy@gmail.com" &&  login.password==='meena'){
    alert("Login Successfully")
    return move('/viewdata')

}
else{
    alert("Please Check your data")
}
}

  return (
    
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-2 pt-1">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email" onChange={handleChange}
              name='email'
              value={login.email}
            />
          </div>
          <br></br>
          <div className="form-group mt-2 pt-1">
            <label>Password</label>
            <input id="password"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password" onChange={handleChange}
              name='password'
              value={login.password}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary mt-4 " onClick={handleSubmit}>
              Submit
            </button>
          </div>
         
        </div>
      </form>
    </div>
  )
}

export default Login
