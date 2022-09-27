import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [welcomeBanner, setWelcomeBanner] = useState('');

  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    console.log('Hit');
    axios
      .post('/users', { email, password, firstName, lastName })
      .then(() => navigate('/home'));
  };

  return (
    <>
      {register ? (
        <button onClick={() => setRegister(!register)}>Sign Up</button>
      ) : (
        <button onClick={() => setRegister(!register)}>Login</button>
      )}
      {register ? (
        <form onSubmit={(e) => signUp(e)}>
          <input
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Submit</button>
        </form>
      ) : (
        <form onSubmit={(e) => signUp(e)}>
          <input
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder='first name'
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            placeholder='last name'
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            placeholder='password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Register</button>
        </form>
      )}
      <h1>{welcomeBanner}</h1>
    </>
  );
}
