import React from 'react';
import './Service.css'

const Service = ({service}) => {

    const {img, name, price, discription} = service;
    return (
        <div className='service'>
            <img width={350} height={350} src={img} alt="" />
            <h2>Name: {name}</h2>
            <h1>Price: {price}</h1>
            <p>Discription: {discription}</p>
            <button className='button'>Booking: {name}</button>
        </div>
    );
};

export default Service;