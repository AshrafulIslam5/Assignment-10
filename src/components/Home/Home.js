import React from 'react';
import Banner from './Banner/Banner';
import Footer from '../Shared/Footer/Footer';
import Gift from './Gift/Gift';
import Services from './Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Gift></Gift>
            <Footer></Footer>
        </>
    );
};

export default Home;