import React from 'react';
import Footer from '../Shared/Footer/Footer';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <h2 className='text-danger text-center my-4'>SignUp!!</h2>
            <Form className='container border border-danger w-50 py-4 px-5 d-flex flex-column rounded-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Name</Form.Label>
                    <Form.Control className='border-danger' type="text" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control className='border-danger' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control className='border-danger' type="password" placeholder="Password" required />
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