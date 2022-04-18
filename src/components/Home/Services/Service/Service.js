import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, image, description, price } = service;
    return (
        <Col>
            <div className='p-3 border rounded-3 text-center mt-2 h-100 position-relative'>
                <img className='w-100 rounded-3' src={image} alt="" />
                <h2>{name}</h2>
                <p>{description}</p>
                <h3 className='my-4 pb-3'>{price}</h3>
                <button className='btn btn-danger position-absolute bottom-0 start-50 translate-middle mt-4'>Check</button>
            </div>
        </Col>
    );
};

export default Service;