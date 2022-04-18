import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id='services' className='container g-1 mb-5 pb-5 '>
            <h2 className='text-center text-danger display-3 font-oswald mt-5'>Services</h2>
            <Container>
                <Row xs={1} md={3} className="p-3 g-4">
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;