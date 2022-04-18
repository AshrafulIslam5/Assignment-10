import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleName = e => {
        setName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, error] = useCreateUserWithEmailAndPassword(auth);

    const afterSubmit = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/home');
    }
    return (
        <div>
            <h2 className='text-danger text-center my-4'>SignUp!!</h2>
            <Form onSubmit={afterSubmit} className='container border border-danger w-50 py-4 px-5 d-flex flex-column rounded-3'>
                <Form.Group className="mb-3">
                    <Form.Label className='fw-bold'>Name</Form.Label>
                    <Form.Control onBlur={handleName} className='border-danger' type="text" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} className='border-danger' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} className='border-danger' type="password" placeholder="Password" required />
                </Form.Group>
                <p>Already Have an Account? Then <Link className='text-decoration-none' to='/login'>Login</Link></p>
                <Button variant="danger" className='w-25' type="submit">
                    Submit
                </Button>
            </Form>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;