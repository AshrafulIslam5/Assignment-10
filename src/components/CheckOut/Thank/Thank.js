import React from 'react';
import { useParams } from 'react-router-dom';

const Thank = () => {
    const {name} = useParams()
    return (
        <div>
            Thank You For Booking {name}
        </div>
    );
};

export default Thank;