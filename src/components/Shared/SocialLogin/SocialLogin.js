import React from 'react';
import google from '../../../images/google.png';
import github from '../../../images/github.png';
import facebook from '../../../images/facebook.png';
import auth from '../../../firebase.init';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || '/';

    let errorMsg
    let loadingMsg
    if (error) {
        errorMsg = <p className='text-danger mt-3'>{error.message}</p>
    }
    if (loading) {
        loadingMsg = <p>loading...</p>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (error1) {
        errorMsg = <p className='text-danger mt-3'>{error.message}</p>
    }
    if (loading1) {
        loadingMsg = <p>loading...</p>
    }
    if (user1) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='mt-3 d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-danger mb-1'></div>
                <p className='mt-2 mx-3'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-danger mb-1'></div>
            </div>
            {loadingMsg}
            {errorMsg}
            <div className='d-flex flex-column align-items-center'>

                <button onClick={() => signInWithGoogle()} className='btn btn-danger rounded-pill px-5 mt-3'><img style={{ width: '30px', marginRight: '12px' }} src={google} alt="" /> Continue with Google</button>

                <button onClick={() => signInWithFacebook()} className='btn btn-danger rounded-pill px-5 mt-3'><img style={{ width: '30px', marginRight: '7px' }} src={facebook} alt="" /> Continue with Facebook</button>
            </div>
        </div>
    );
};

export default SocialLogin;