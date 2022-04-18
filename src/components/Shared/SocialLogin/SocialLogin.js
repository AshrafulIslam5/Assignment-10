import React from 'react';
import google from '../../../images/google.png';
import github from '../../../images/github.png';
import facebook from '../../../images/facebook.png';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorMsg
    if (error) {
        errorMsg = <p className='text-danger mt-3'>{error.message}</p>
    }
    let loadingMsg
    if (loading) {
        loadingMsg = <p>loading...</p>
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

                <button className='btn btn-danger rounded-pill px-5 mt-3'><img style={{ width: '30px', marginRight: '7px' }} src={facebook} alt="" /> Continue with Facebook</button>
            </div>
        </div>
    );
};

export default SocialLogin;