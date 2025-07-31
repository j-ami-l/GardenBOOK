import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import MyTipsCard from '../Components/MyTipsCard';

const MyTips = () => {

    const {user} = use(AuthContext)
    const [mytips , setMytips] = useState([])
    
    const userMail = user.email;

   useEffect(()=>{
     fetch("http://localhost:3000/mytips", {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify({email : userMail})
    })
    .then(res=>res.json())
    .then(result =>{
        console.log(result);
        setMytips(result)
        
    })
   },[userMail])
    


    return (
        <div className='my-5 mx-5'>
            {
                mytips.map(tip=> <MyTipsCard 
                    key={tip._id}
                    tip={tip}
                    ></MyTipsCard>)
            }
        </div>
    );
};

export default MyTips;