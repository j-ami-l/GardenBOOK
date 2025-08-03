import React, { useEffect, useState } from 'react';
import AddGardeners from './AddGardeners';
import { AuthContext } from '../Provider/Authprovider';
import GardenerCard from '../Components/GardenerCard';
import Loading from '../Components/Loading';

const ExploreGardeners = () => {

    const [gardeneres, setGardenres] = useState([])



    useEffect(() => {
        fetch('https://garden-book-server-site-2.vercel.app/gardeners', {
            method: "GET"
        })
            .then(res => res.json())
            .then(result => {
                setGardenres(result)
            })
    }, [])

    if (!gardeneres) {
        return <Loading></Loading>
    }



    return (
        <div className='w-11/12 mx-auto my-10'>
            <h1 className='text-2xl text-center font-semibold text-green-700 my-10'>All Gardeners</h1>
            <div className='flex flex-col items-center  md:grid  md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    gardeneres?.map(gardenere => <GardenerCard key={gardenere._id} gardenere={gardenere}></GardenerCard>)
                }
            </div>

        </div>
    );
};

export default ExploreGardeners;