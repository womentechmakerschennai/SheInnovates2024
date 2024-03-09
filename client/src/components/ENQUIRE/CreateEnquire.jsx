import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const CreateEnquire = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const navigate=useNavigate()

    const Submit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/CreatEnquire",{name,email,dob,gender,phone,message})
        .then(result=>{
          navigate('/')
          console.log(result.data)
          
      })
        .catch(err=>console.log(err))
       
    }
  return (

   
    <form onSubmit={Submit}>
         <Link to={"/"}>Home</Link>
 <div>
    <h1>Enquire Form</h1>
        <div>
        <label>name</label>
        <input type='name' required onChange={(e)=>setName(e.target.value)}></input>
        </div>
        <label>EMAIL</label>
        <input type='email'  required  onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <div>
        <div>
        <label>DATE OF BIRTH</label>
        <input type='date' required  onChange={(e)=>setDob(e.target.value)}></input>
        </div>
        <div>
        <label>GENDER</label>
      <select name="gender"  required value={gender} onChange={(e)=>setGender(e.target.value)} id="">
        <option>SELECT GENDER</option>
        <option value="female">female</option>
        <option value="male">male</option>
      </select>
        </div>
        <div>
        <label>PHONE</label>
        <input type='number' required onChange={(e)=>setPhone(e.target.value)}></input>
        </div>
        <div>
        <label>DESCRIPTION OF MESSAGE</label>
        <input type='message'  required onChange={(e)=>setMessage(e.target.value)}></input>
        </div>
        <div>
     <button type='submit'>SUBMIT</button>
        </div>
       
    </div> 
    </form>
   
  )
}

export default CreateEnquire