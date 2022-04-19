import React from 'react';
import { Spinner } from 'react-bootstrap';

const HeaderLoading = () => {
    return (
        <div className='w-100 d-flex justify-content-center align-items-center'>
                <Spinner animation='border' variant='danger' />
            </div>
    );
};

export default HeaderLoading;