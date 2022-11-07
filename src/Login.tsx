import './App.css';
import React, { useState, useRef, useEffect } from "react";
import { Form } from 'antd';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
//import { login } from './redux/userSlice';
import userLogin from './redux/userAction';

function Login() {
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event: any) => {
    //Prevent page reload
    event.preventDefault();

    // dispatch(
    //   login({
    //     name: username,
    //     password: password,
    //     loggedIn: true,
    //   })
    // );
  };

  return (
    <div className='App'>
      <form className='login-page' onSubmit={handleSubmit}>
        <h1>Login</h1>
          <Form.Item>
            <input type='text' 
            placeholder='username' 
            autoComplete='off'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required />
          </Form.Item>
          <Form.Item>
            <input type='password' 
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required />
          </Form.Item>
          <Form.Item>
            <button type="submit">Sign In</button>
          </Form.Item>
          <Form.Item>
            <p className='register'>Not registered? <a href='#'>Create an account</a></p>
          </Form.Item>
        </form>
    </div>
  );
}

export default Login;