import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id='services' className='container g-1 mb-5 pb-5'>
            <h2 className='text-center text-danger display-3 font-oswald mt-5'>Services</h2>
            <div className='row d-flex justify-content-center align-items-center'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;