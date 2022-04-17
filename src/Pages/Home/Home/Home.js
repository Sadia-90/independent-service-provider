import React from 'react';
import { Navbar } from 'react-bootstrap';


import Banner from '../../header/Header/Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
           <Navbar></Navbar>
            <Banner></Banner>
           <Services></Services>
           
        </>
    );
};

export default Home;