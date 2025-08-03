import React from 'react';
import Banner from '../Components/Header/Banner';
import ActiveGardeners from '../Components/ActiveGardeners';
import TrandingTips from '../Components/TrandingTips';
import Example from '../Components/Example';
import MostlyAsked from '../Components/MostlyAsked';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto my-10'>
            <Banner></Banner>
            <div className='relative'>
                <div className='absolute z-[-3] top-[-60px] w-[100px]'>
                    <Example></Example>
                </div>
                <ActiveGardeners></ActiveGardeners>
            </div>
            <TrandingTips></TrandingTips>
            <MostlyAsked></MostlyAsked>
        </div>
    );
};

export default Home;