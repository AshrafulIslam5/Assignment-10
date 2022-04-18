import React from 'react';
import Footer from '../Shared/Footer/Footer';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2 className='text-danger text-center my-4'>Please Login</h2>
            <Form className='container border border-danger w-50 py-4 px-5 d-flex flex-column rounded-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control className='border-danger' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control className='border-danger' type="password" placeholder="Password" required />
                </Form.Group>
                <p>New To this Website? Then <Link className='text-decoration-none' to='/signup'>SignUp</Link></p>
                <Button variant="danger" className='w-25' type="submit">
                    Submit
                </Button>
            </Form>
            <Footer></Footer>
        </div>

    );
};

export default Login;