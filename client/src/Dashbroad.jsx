import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

const Dashbroad = () => {
  const [success,setsuccess]=useState('')
  const navigate=useNavigate()
  axios.defaults.withCredentials=true
useEffect(()=>{

axios.get("http://localhost:8000/dashbroad")
.then(response=>{
  if(response.data==="success"){
   setsuccess("successfull ok")
  }else{
    navigate("/login")
  }
})
.catch(err=>console.log(err))
},[])
  return (
   <div>
    <h2>WOMENSTECH CAREER</h2>
<Link to={"/"}>Home</Link>
<div>
<h2> job create</h2>
    <Link to={"/Createjob"}>CREATE JOBS</Link>

</div>
  <div>
  <h2>WOMENS COMMUNITY</h2>
    <Link to={"/Createcommunity"}>CREATE COMMUNITY </Link>
  </div>
   
   <div>
   <h3>WOMENS EVENT</h3>
    <Link to={'/CreateEvent'}>CREATE EVENT</Link>
   </div>

   <div>
    <h3>ENQUIRE FORM</h3>
    <Link to={"/CreatEnquire"}>CLICK TO ENQUIRY</Link>
   </div>
  
   </div>
   
  )
}

export default Dashbroad