import React, { useState,} from 'react'
import{useNavigate}from "react-router-dom"
import axios from 'axios'


const Createjob = () => {
    const [jobTitle,setTitle]=useState()
    const [companyname,setcomanyname]=useState()
    const [companylocation,setcompanylocation]=useState()
    const [salary,setsalary]=useState()
    const [description,setdescription]=useState()
    const navigate=useNavigate()
    const Submit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/Createjob",{jobTitle,companyname,companylocation,salary,description})
        .then(result=>{
            navigate('/jobs')
            console.log(result.data)
            
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className='d-flex vh-100  justify-content-center align-item-center login'>
        <div className='w-50 h-50  bg-white rounded p-7'>
            <form onSubmit={Submit}>
                <h2>ADD jobs</h2>    
                <div className='mb-3'>
                    <label>jobTitle</label>
                    <input type='text' placeholder='enter your text'
                     className='form-control'
                      onChange={(e)=>setTitle(e.target.value)}></input>
                </div>
                <div className='mb-2'>
                    <label>companyname</label>
                    <input type='text'
                     placeholder='enter companyname'
                       className='form-control'
                      onChange={(e)=>setcomanyname(e.target.value)}></input>
                </div>
                <div className='mb-3'>
                    <label>companylocation</label>
                    <input type='text'
                     placeholder='enter companylocation' 
                      className='form-control' 
                       onChange={(e)=>setcompanylocation(e.target.value)}></input>
                </div>
                <div className='mb-3'>
                    <label>salary</label>
                    <input type='number'
                     placeholder='enter salary' 
                      className='form-control' 
                       onChange={(e)=>setsalary(e.target.value)}></input>
                </div>
                <div className='mb-3'>
                    <label>description</label>
                    <input type='text'
                     placeholder='enter description' 
                      className='form-control' 
                       onChange={(e)=>setdescription(e.target.value)}></input>
                </div>
                <button className='btn btn-success'>submit</button>
            </form>    
         </div>
    </div>
  )
}

export default Createjob