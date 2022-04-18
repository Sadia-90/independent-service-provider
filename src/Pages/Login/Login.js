import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useLocation } from "react-router-dom";
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword, user
  ] = useSignInWithEmailAndPassword(auth);
  let from = location.state?.from?.pathname || "/";
  if(user){
    navigate(from)
  }
  const handelRegister  = e => {
    e.preventDefault()
    console.log(email, password);
    signInWithEmailAndPassword(email, password)
  }
  return (
    <div className='register-form'>
      <h1>register</h1>
      <form onSubmit={handelRegister}>
        <input onBlur={(e) => setEmail(e.target.value)} type="email" name="email" id="" placeholder='Your email' required />

        <input onBlur={(e) => setPassword(e.target.value)} type="password" name="password" id="" placeholder='Your password' required />

        <input type="submit" value="Register" />
      </form>
      <p>
        Don't have an account? <Link to="/register">Please Register</Link>
      </p>

      
      <SocialLogin></SocialLogin>
      
    </div>
    
  );
};

export default Login;








































/* import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
// import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate('');

  const [
    signInWithEmailAndPassword,
    user,
    //  loading,
    //  error,
  ] = useSignInWithEmailAndPassword(auth);

  if (user){
    navigate('/home')
  }

  const handleSubmit = event => {
     event.preventDefault();
     const email = event.target.email.value;
    const password = event.target.password.value;
     signInWithEmailAndPassword(email, password)
     console.log('clicked')

    
}

  const navigateRegister = e =>{
    navigate('/register')
  }

    return (
      <div className='form-container'>
            <h1>login</h1>
        <div>

         

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>

              </Form.Group>
              <input className='form-submit' type="submit" value="Login" required/>
            </Form>
                <p>
                    independent provider service? <span className='form-link' onClick={navigateRegister}>create an account</span>
                </p>
        </div>  
      </div>
    );
};

export default Login; */