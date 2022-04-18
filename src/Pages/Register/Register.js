import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
  const navigate = useNavigate();

  const navigateLogin = () =>{
    navigate('/login')
  }

  const handelRegister = e =>{
    e.preventDefault();
  } 

  return (
    <div className='register-form'>
      <h1>register</h1>
      <form onSubmit={handelRegister}>
        <input type="email" name="email" id="" placeholder='Your email' required/>
        
        <input type="password" name="password" id="" placeholder='Your password' required/>

        <input type="submit" value="Register" />
      </form>
      <p>
                   Already have an account? <Link to="/login" onClick={navigateLogin}>Please Login</Link>
                </p>
    </div>
  );
};

export default Register;