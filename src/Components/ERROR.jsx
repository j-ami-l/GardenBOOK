import React from 'react';
import eror_boy from '../assets/404_man.png'

const ERROR = () => {
    return (
        <div className='bg-[#ecfae5] min-h-screen pt-20 md:pt-40'>
            <div className='w-[80%] mx-auto flex gap-5 flex-col md:flex-row items-center justify-center'>
                <div><img className='w-[400px]' src={eror_boy} alt="" /></div>
                <div>
                    <h1 className='text-[#004030] text-7xl md:text-9xl font-bold'>404</h1>
                    <h3 className='text-[#004030] text-xl md:text-2xl'>We couldn't find what you're
                        looking for.</h3>
                </div>
            </div>
        </div>
    );
};

export default ERROR;