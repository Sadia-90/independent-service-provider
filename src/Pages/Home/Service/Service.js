import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {

    const {id, img, name, price, discription} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        console.log(id)
        navigate(`/service/${id}`); 
    }

    return (
        <div className='service'>
            <img className='w-100' width={350} height={350} src={img} alt="" />
            <h2>Name: {name}</h2>
            <h1>Price: ${price}</h1>
            <p>Discription: {discription}</p>
            <button onClick={() => navigateToServiceDetail(id)}className='button'>Booking: {name}</button>
        </div>
    );
};

export default Service;