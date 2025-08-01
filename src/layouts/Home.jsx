import React from 'react';
import Banner from '../Components/Header/Banner';
import ActiveGardeners from '../Components/ActiveGardeners';
import TrandingTips from '../Components/TrandingTips';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto my-10'>
            <Banner></Banner>
            <ActiveGardeners></ActiveGardeners>
            <TrandingTips></TrandingTips>
        </div>
    );
};

export default Home;