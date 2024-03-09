import React, { useState,} from 'react'
import{useNavigate}from "react-router-dom"
import axios from 'axios'


const Createcommunity = () => {
    const [communityname,setcommunityname]=useState()
    const [communitydesc,setcommunitydes]=useState()
    
    const navigate=useNavigate()
    const Submit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/Createcommunity",{communityname,communitydesc})
        .then(result=>{
            navigate('/')
            console.log(result.data)
            
        })
        .catch(err=>console.log(err))
    }


  return (
    <div className='d-flex vh-100  justify-content-center align-item-center login'>
        <div className='w-50 h-50  bg-white rounded p-7'>
            <form onSubmit={Submit}>
                <h2>ADD COMMUNITY</h2>    
                <div className='mb-3'>
                    <label>Community NAME</label>
                    <input type='text' placeholder='enter your text'
                     className='form-control'
                      onChange={(e)=>setcommunityname(e.target.value)}></input>
                </div>
                <div className='mb-3'>
                    <label>Communitydescription</label>
                    <input type='text'
                     placeholder='enter description' 
                      className='form-control' 
                       onChange={(e)=>setcommunitydes(e.target.value)}></input>
                </div>
                <button className='btn btn-success'>submit</button>
            </form>    
         </div>
    </div>
  )
}

export default Createcommunity