import React, { useState,} from 'react'
import{useNavigate}from "react-router-dom"
import axios from 'axios'


const CreateEvent = () => {
    const [eventname,seteventname]=useState()
    const [eventdesc,seteventdes]=useState()
    const [eventplace,seteventplace]=useState()
    
    const navigate=useNavigate()
    const Submit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/CreateEvent",{eventname,eventdesc,eventplace})
        .then(result=>{
            navigate('/event')
            console.log(result.data)
            
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className='d-flex vh-100  justify-content-center align-item-center login'>
        <div className='w-50 h-50  bg-white rounded p-7'>
            <form onSubmit={Submit}>
                <h2>ADD Events</h2>    
                <div className='mb-3'>
                    <label>Event NAME</label>
                    <input type='text' placeholder='enter your text'
                     className='form-control'
                      onChange={(e)=>seteventname(e.target.value)}></input>
                </div>
                <div className='mb-3'>
                    <label>Event description</label>
                    <input type='text'
                     placeholder='enter description' 
                      className='form-control' 
                       onChange={(e)=>seteventdes(e.target.value)}></input>
                </div>
                <div className='mb-3'>
                    <label>Event Place</label>
                    <input type='text'
                     placeholder='enter Place' 
                      className='form-control' 
                       onChange={(e)=>seteventplace(e.target.value)}></input>
                </div>
                <button className='btn btn-success'>create</button>
            </form>    
         </div>
    </div>
  )
}

export default CreateEvent