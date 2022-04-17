import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <h1>login</h1>
      <div>
     <form action="">
     <div className="input-group">
        <label htmlFor="email">Email: </label>
        <input type="email" name='email' id='' required/>  
      </div> 
      <div className="input-group">
        <label htmlFor="password">Password: </label>

        <input type="password" name='password' id=''/>  
      </div>
      <input className='form-submit' type="submit" value="Login" required/>
     </form>
     <p>
         independent provider service? <Link className='form-link' to="/signup">create an account</Link>
     </p>
    </div>  
    </div>
    );
};

export default Login;