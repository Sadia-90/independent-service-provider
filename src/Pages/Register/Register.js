import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {

    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handelEmailBlur = event => {
        setemail(event.target.value);
    }

    const handelPasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handelErrorBlur = event => {
        setError(event.target.value);



        createUserWithEmailAndPassword(email, password, error)
    }
    const handleCreateUser = event => {
        event.preventDefault();
    }

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    return (
        <div className='form-container'>
        <h1 className='text-orange-600'>Sign Up</h1>
        <div>
            <form onsubmit={handleCreateUser}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handelEmailBlur} type="email" name='email' id='' />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>

                    <input onBlur={handelPasswordBlur} type="password" name='password' id='' required />
                </div>
                <input onBlur={handelErrorBlur} className='form-submit' type="submit" value="SignUp" required />
            </form>
            <p>
                an account? <Link className='form-link' to="/login">Login</Link>
            </p>
        </div>
    </div>
    );
};

export default Register;