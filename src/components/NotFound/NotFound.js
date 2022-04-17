import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound.png'

const NotFound = () => {
    return (
        <div className='text-center'>
            <img className='w-25 mt-3' src={notfound} alt="" />
            <h2>This is A wrong place....</h2>
            <button className='btn btn-primary mt-2 rounded-pill px-3'><Link className=' text-decoration-none text-white' to='/home'>Go To Home</Link></button>
        </div>
    );
};

export default NotFound;