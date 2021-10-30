import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Service = ({ service, index, services }) => {
    const { users } = useAuth()
    const handhAddToCart = (index) => {
        const data = (services[index]);
        data.email = users?.email
        data.status = 'pending';
        console.log(data);
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
    }

    const { _id, name, img, price, description } = service;
    return (
        <div>
            <img className="w-50 rounded-2" src={img} alt="..." />
            <h5 >{name}</h5>
            <p >{description}</p>
            <p ><small class="text-muted">{price}</small></p>

            <button onClick={() => handhAddToCart(index)}>Oder Now</button>
        </div>
    );
};

export default Service;