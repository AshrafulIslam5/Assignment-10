import React from 'react';
import userimg from '../../images/user.png'
const About = () => {
    return (
        <div className='text-center'>
            <img className='w-25 mt-4' src={userimg} alt="" />
            <div className='d-flex align-items-center justify-content-center mt-2'>
                <h2 className='text-danger'>Name:</h2>
                <h3 className='ms-3'>Ashraful Islam Mehad</h3>
            </div>
            <div className='container'>
                <h2 className='text-danger mt-4'>A Little about my future</h2>
                <h4>I am a Dhaka University student who likes coding and programming. My age is 25 now and I am learning web development under a course of <a className='text-decoration-none' rel='noreferrer' target='_blank' href="https://www.programming-hero.com/">Programming Hero</a> by <a className='text-decoration-none' target='_blank' rel='noreferrer' href="https://www.jhankarmahbub.com/">Jhankar Mahbub</a>. I am still Learning, and I will Make it Through and become a full stack developer. I am still planning as I want to get into a job or start freelancing</h4>
            </div>
        </div>
    );
};

export default About;