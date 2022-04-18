import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Thank = () => {
    const { name } = useParams()
    return (
        <div className='text-center mt-5'>
            <h2> Thank You For Booking ! <span className='text-danger'>{name}</span> !</h2>
            <button className='btn btn-primary mt-2 rounded-pill px-3'><Link className=' text-decoration-none text-white' to='/home'>Go To Home</Link></button>
        </div>
    );
};

export default Thank;