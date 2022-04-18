import React from 'react';

const Service = ({ service }) => {
    const { name, image, description, price } = service;
    return (
        <div className='col-12 col-sm-6 col-md-4 border w-25 p-2 d-flex flex-column justify-content-center align-items-center text-center mx-4'>
            <img className='w-100 rounded-3' src={image} alt="" />
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <h3 className='mb-4'>{price}</h3>
                <button className='btn btn-danger'>Check</button>
            </div>
        </div>
    );
};

export default Service;