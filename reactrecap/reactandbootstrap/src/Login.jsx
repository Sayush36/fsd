import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login({logindata}) {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate=useNavigate();
    function verification(e) {
  e.preventDefault();

  if (!logindata) {
    alert('No user data found! Please register first.');
    return;
  }

  if (logindata.Email === email) {
    if (logindata.Password === password) {
      navigate('/dashboard');
    } else {
      alert('Password is not correct');
    }
  } else {
    alert('Email is not registered');
  }
}

  return (
    <div>
      <h2>Login Form</h2>
      <form>
        <div className='form-group'>
            <label for="exampleInputEmail">Email:</label>
            <input 
                type="email" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                className='form-control'
            />

            <label for="exampleInputPassword">Password:</label>
            <input 
                type="password" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
                className='form-control'
            />
        </div>
        <button type="submit" onClick={verification} className='btn btn-primary mt-3'>Submit</button>
      </form>
    </div>
  )
}

export default Login;