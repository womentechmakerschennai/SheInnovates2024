
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import {Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const[email,setemail]=useState()
  const[password,setpassword]=useState()
  const navigate=useNavigate()



const handleLogin=(e)=>{
e.preventDefault()
axios.defaults.withCredentials=true
axios.post("http://localhost:8000/login",{email,password})
.then(response=>{
  if(response.data.Status==="success"){
    if(response.data.role==="admin"){
      navigate("/dashbroad")
     }
     else{
      navigate("/")
     }
  }
 
})
.catch(err=>console.log(err))

}
  return (
<>
<div className="container mt-12">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <Form onSubmit={handleLogin}>
                
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" name="email" value={email} onChange={(e)=>setemail(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" name="password" value={password} onChange={(e)=>setpassword(e.target.value)} required />
                </Form.Group>
                <Button variant="primary" type="submit">
               LOGIN
                </Button>
              </Form>
              <p>Create new account</p>
              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default Login