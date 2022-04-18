import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Register.css'

const Register = () => {
  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    //  loading,
    //  error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const navigateLogin = () =>{
    navigate('/login')
  }
  if(user){
    navigate('/')
  }

  const handelRegister = e =>{
    e.preventDefault();
   
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password)
    console.log(email, password)
  } 

  return (
    <div className='register-form'>
      <h1>register Please</h1>
      <form onSubmit={handelRegister}>
      <input type="name" name="name" id="" placeholder='Your name' required/>
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