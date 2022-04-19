import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-5'>
            <div className='bg-success container rounded-3 p-3 text-white'>
                <h3>Difference between Authorization and Authentication?</h3>
                <p><strong>Ans: </strong>Here, Authorization indicates to an account that has hold or access of the project. Can be called an Admin or author or moderator. While Authentication means to log in or sign up or register to get the benefits of that project or source.</p>
            </div>
            <div className='bg-warning mt-3 container rounded-3 p-3 text-black'>
                <h3> Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p><strong>Ans: </strong>Firebase from Google feels secure because it's from google inc and google are great at privacy. Firebase is easy to use and  Since the operations and internal functions are so solid, and taken care of by the Firebase interface, I can Build a high quality app or website with it! We can even Host our websites here. <span className='text-white'>We can impliment google, apple, facebook, twitter, and even raw email password sign in or even phone number sign in!</span></p>
            </div>
        </div>
    );
};

export default Blogs;