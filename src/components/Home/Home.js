import React from 'react';
import Banner from './Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import Gift from './Gift/Gift';
import Services from './Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <h2 className='text-center text-danger font-oswald display-3 mt-4 text-decoration-underline'>Your Wedding PhotoGrapher</h2>
            <Services></Services>
            <Gift></Gift>
            <Footer></Footer>
        </>
    );
};

export default Home;