import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const location = useLocation()
    let from = location.state?.from?.pathname || '/';

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
    const [sendEmailVerification, verificationError] = useSendEmailVerification(auth);

    const [updateProfile] = useUpdateProfile(auth);

    const afterSubmit = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification();
        toast('email Sent');
        await updateProfile({ displayName: name });
    }
    let errorMsg;
    if (error) {
        errorMsg = <p className='text-danger'>{error.message}</p>
    }
    if (verificationError) {
        errorMsg = <p className='text-danger'>{error.message}</p>
    }
    if (user) {
        navigate(from, { replace: true });
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
                    {errorMsg}
                </Form.Group>
                <p>Already Have an Account? Then <Link className='text-decoration-none' to='/login'>Login</Link></p>
                <Button variant="danger" type="submit">
                    Sign Up
                </Button>
                <SocialLogin></SocialLogin>
            </Form>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignUp;