import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Thank = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }
    const name = user.displayName;
    return (
        <div className='text-center mt-5'>
            <h2> Thank You For Booking ! <span className='text-danger'>{name}</span> !</h2>
            <button className='btn btn-primary mt-2 rounded-pill px-3'><Link className=' text-decoration-none text-white' to='/home'>Go To Home</Link></button>
        </div>
    );
};

export default Thank;