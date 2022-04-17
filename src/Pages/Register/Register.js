import { Button } from 'bootstrap';
// import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
 import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
 import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        // loading,
        // error,
      ] = useCreateUserWithEmailAndPassword(auth);

    // const [email, setemail] = useState('');
    // const [password, setPassword] = useState('');
    

    // const handelEmailBlur = event => {
    //     setemail(event.target.value);
    // }

    // const handelPasswordBlur = event => {
    //     setPassword(event.target.value);
    // }

    // const handelErrorBlur = event => {
    //     setError(event.target.value);



       
    // }
    // const handleCreateUser = event => {
    //     event.preventDefault();

    //     createUserWithEmailAndPassword(email, password)
    // }

    // const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    return (
        <div className='form-container'>
        <h1 className='text-orange-600'>Sign Up</h1>
        <div>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            <p>
                an account? <Link className='form-link' to="/login">Login</Link>
            </p>
        </div>
    </div>
    );
};

export default Register;