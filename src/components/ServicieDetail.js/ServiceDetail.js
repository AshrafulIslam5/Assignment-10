import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceName } = useParams();
    return (
        <div className='text-center'>
            <h2>Booking For: {serviceName}</h2>
            <Link to='/checkout'><button className='btn btn-danger'>Proceed to CheckOut!</button></Link>
        </div>
    );
};

export default ServiceDetail;