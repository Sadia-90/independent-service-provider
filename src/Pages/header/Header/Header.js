import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
  <Navbar bg="warning" variant="dark">
    
        <div>
        <h1>independent service</h1>
        </div>

       
        <Nav className="me-auto">
        <NavLink className={({isActive}) => isActive ? "active-link" : "link"} to='/'>Home</NavLink>       
              
        <NavLink className={({isActive}) => isActive ? "active-link" : "link"} to='/blog'>Blogs</NavLink>
        <NavLink className={({isActive}) => isActive ? "active-link" : "link"} to='/about'>About</NavLink>
        <NavLink className={({isActive}) => isActive ? "active-link" : "link"} to='/Login'>Login</NavLink>
       
        </Nav>
       
    
  </Navbar>
  


</>
    );
};

export default Header;