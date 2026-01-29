import React, { useState } from 'react';

function Registration({regdata}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function getData(e) {
    e.preventDefault(); 
    // alert("Hi " + name);
    // alert("Your email is: " + email);
    const data={
      Name :name,
      Email:email,
      Password:password
    }
    regdata(data);
  }

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={getData}>
        <div className='form-group'>
          <label htmlFor="exampleInputEmail">Name:</label>
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='form-control'
          />

          <label htmlFor="exampleInputEmail">Email:</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form-control'
          />

          <label htmlFor="exampleInputPassword">Password:</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='form-control'
          />
        </div>

        <button type="submit" className='btn btn-primary mt-3'>Submit</button>
      </form>
    </div>
  );
}

export default Registration;
