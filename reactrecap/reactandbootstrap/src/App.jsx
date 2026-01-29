import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Mainlayout from './Mainlayout'
import Login from './Login'
import Registration from './Registration'
import Dashboard from './Dashboard'

function App() {
 const[logdata,setlogdata]=useState();

  return (
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />} />
      
          <Route path="/login" element={<Login logindata={logdata}/>} />
          <Route path="/registration" element={<Registration  regdata={setlogdata}/>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <div>{JSON.stringify(logdata)}</div>
    </>
  )
}

export default App
