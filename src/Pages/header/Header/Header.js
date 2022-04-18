import { signOut } from 'firebase/auth';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handelSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar bg="warning" variant="dark">

                <div>
                    <h1>independent service</h1>
                </div>


                <Nav className="me-auto">
                    <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/'>Home</NavLink>

                    <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/blog'>Blogs</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/about'>About</NavLink>
                    {

                        user ?
                            <button onClick={handelSignOut}>sign out</button>
                            :
                            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/login'>Login</NavLink>
                    }

                </Nav>


            </Navbar>



        </>
    );
};

export default Header;