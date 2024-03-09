import { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import { Link ,useNavigate} from 'react-router-dom';


function signup() {
  const[name,setname]=useState()
  const[email,setemail]=useState()
  const[password,setpassword]=useState()
  const[xp,setxp]=useState(0)
  const navigate =useNavigate()
  
const handleSubmit=(e)=>{
  e.preventDefault()
  axios.post("http://localhost:8000/register",{name,email,password,xp})
  .then(response=>console.log(response.data))
  navigate("/")
  .catch((err)=>console.log(err))
  

}
  return (
    <>
      <div className="container mt-12">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>Register</h3>
            </div>
            <div className="card-body">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" name="name" value={name} onChange={(e)=>setname(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" name="email" value={email} onChange={(e)=>setemail(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" name="password" value={password} onChange={(e)=>setpassword(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label></Form.Label>
                  <Form.Control type="hidden" placeholder="xp" name="email" value={xp} onChange={(e)=>setxp(e.target.value)} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
              <p>Already have account?</p>
              <Link to="/login">LOGIN</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default signup
