import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate('');



  const handleSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
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

export default Login;