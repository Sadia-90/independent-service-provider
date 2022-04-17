import React from 'react';

const Service = ({service}) => {

    const {img, name, price, discription} = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h1>Price: {price}</h1>
            <p>Discription: {discription}</p>
            <button>Booking: {name}</button>
        </div>
    );
};

export default Service;