import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

export default function Login() {
  const [register, setRegister] = useState(true);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    console.log('Hit');
    axios
      .post('/users', { email, password, firstName, lastName })
      .then(() => navigate('/home'));
  };

  return (
    <div className='login-background'>
      <div className='login-container'>
        {register ? (
          <div className='toggle-container'>
            <p>No Account? Sign up</p>
            <br />
            <button id='register-toggle' onClick={() => setRegister(!register)}>
              Sign Up
            </button>
          </div>
        ) : (
          <div className='toggle-container'>
            <p>Already registered? Login</p>
            <br />
            <button id='register-toggle' onClick={() => setRegister(!register)}>
              Login
            </button>
          </div>
        )}
        {register ? (
          <form className='login' onSubmit={(e) => signUp(e)}>
            <input
              aria-required
              required
              placeholder='Email *'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              aria-required
              required
              type='password'
              placeholder='Password *'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='btn-login'>Submit</button>
            <span></span>
          </form>
        ) : (
          <form className='login' onSubmit={(e) => signUp(e)}>
            <input
              aria-required
              required
              placeholder='Email *'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              aria-required
              required
              placeholder='First Name *'
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              aria-required
              required
              placeholder='Last Name *'
              onChange={(e) => setLastName(e.target.value)}
            />

            <input
              aria-required
              required
              placeholder='Password *'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='btn-login'>Register</button>
          </form>
        )}
      </div>
    </div>
  );
}
