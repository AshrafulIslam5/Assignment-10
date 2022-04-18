import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || '/'

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    if (user) {
        navigate(from, { replace: true });
    }
    const afterSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <h2 className='text-danger text-center my-4'>Please Login</h2>
            <Form onSubmit={afterSubmit} className='container border border-danger w-50 py-4 px-5 d-flex flex-column rounded-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} className='border-danger' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} className='border-danger' type="password" placeholder="Password" required />
                </Form.Group>
                <p>New To this Website? Then <Link className='text-decoration-none' to='/signup'>SignUp</Link></p>
                <Button variant="danger" className='w-25' type="submit">
                    Submit
                </Button>
                <div className='d-flex'>
                    <div style={{ height: '4px', color: 'red', width: '20px' }} className=''></div>
                    <div>or</div>
                    <div style={{ height: '1px', color: 'red' }} className=''></div>
                </div>
            </Form>
            <Footer></Footer>
        </div>

    );
};

export default Login;