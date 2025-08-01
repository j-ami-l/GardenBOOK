import React, { use, useEffect, useState } from 'react';
import AddGardeners from './AddGardeners';
import { AuthContext } from '../Provider/Authprovider';
import GardenerCard from '../Components/GardenerCard';

const ExploreGardeners = () => {
    const { user  } = use(AuthContext)
    const [gardeneres, setGardenres] = useState([])

    

    useEffect(() => {
        fetch('http://localhost:5000/gardeners', {
            method: "GET"
        })
            .then(res => res.json())
            .then(result => {
                setGardenres(result)
            })
    }, [])



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