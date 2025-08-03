import React, { Suspense, use, useEffect, useState } from 'react';
import GardenerCard from './GardenerCard';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/Authprovider';

const ActiveGardeners = () => {

    const [ActiveGardener, setActiveGardener] = useState()

    useEffect(() => {
        fetch('https://garden-book-server-site-2.vercel.app/activegardeners', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(result => {
                setActiveGardener(result)
            })
    }, [])



    return (
        <div>
            <h1 className="text-2xl md:text-4xl text-accent-content text-center my-20">
                Our Active Gardeners
            </h1>
            <Suspense fallback={<h1>ladig</h1>}>
                <div>
                    <Marquee>
                        {
                            ActiveGardener?.map(gardenere => <GardenerCard key={gardenere._id} gardenere={gardenere}></GardenerCard>)
                        }
                    </Marquee>
                </div>
            </Suspense>
            <Link to={'/exploregardener'}><div className='flex items-center justify-center my-15'><button className='btn hover:bg-green-700 bg-neutral hover:text-white text-center'>Explore Gardeners</button></div></Link>
        </div>
    );
};

export default ActiveGardeners;