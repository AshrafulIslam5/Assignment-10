import React from 'react';
import './Gift.css';

const Gift = () => {
    return (
        <div className='gift mt-5 '>
            <div className="container d-flex flex-column justify-content-center h-100 align-items-start">
                <h1 class="display-3 text-white w-50">At Our First time, We offer You a gift Card as well</h1>
                <a class="btn btn-outline-light rounded-pill p-3 mt-3" href="#services">Book Us Now</a>
            </div>
        </div>
    );
};

export default Gift;