import { Toast } from 'bootstrap';
import React, { useState } from 'react';
import img from '../../../images/logo.png';

const MadeToast = ({message}) => {
    const [showToast, setShowToast] = useState(true);
    const toggleShowToast = () => setShowToast(!showToast);
    return (
        <Toast show={showToast} onClose={toggleShowToast}>
            <Toast.Header>
                <img
                    src={img}
                    className="rounded me-2 w-25"
                    alt=""
                />
                <strong className="me-auto">Your PhotoGrapher</strong>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    );
};

export default MadeToast;