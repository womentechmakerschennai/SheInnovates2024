import React from "react"
import {BrowserRouter,Routes,Route}from "react-router-dom"
import Signup from "./components/AUTH/Signup"
import Home from "./Home"
import Dashbroad from "./Dashbroad"
import Createjob from "./components/JOBCARD/Womensjobs"
import Job from "./components/JOBCARD/job"
import Createcommunity from "./components/COMMUNITY/Createcommunity"
import Communityget from "./components/COMMUNITY/communityget"
import Eventget from "./components/eventcard/event"
import CreateEvent from "./components/eventcard/CreateEvent"
import Login from "./components/AUTH/Login"
import CreateEnquire from "./components/ENQUIRE/CreateEnquire"
import Maincommunity from "./components/COMMUNITY/maincommunity"
// import Enquire from "./components/ENQUIRE/Enquire"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path={"/"} element={<Home/>}></Route>
      <Route path={"/register"} element={<Signup/>}></Route>
      <Route path={"/login"} element={<Login/>}></Route>
      <Route path={"/dashbroad"} element={<Dashbroad/>}></Route>
      <Route path={"/Createjob"} element={<Createjob/>}></Route>
      <Route path={"/jobs"} element={<Job/>}></Route>
      <Route path={"/Createcommunity"} element={<Createcommunity/>}></Route>
      <Route path={"/community"} element={<Communityget/>}></Route>
      <Route path={"/CreateEvent"} element={<CreateEvent/>}></Route>
      <Route path={"/event"} element={<Eventget/>}></Route>
      <Route path={"/CreatEnquire"} element={<CreateEnquire/>}></Route>
      <Route path={"/maincommunity"} element={<Maincommunity/>}></Route>
      {/* <Route path={"/enquire"} element={<Enquire/>}></Route> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
