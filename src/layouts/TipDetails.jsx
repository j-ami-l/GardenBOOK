import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { AuthContext } from '../Provider/Authprovider';
const TipDetails = () => {
    const { user } = use(AuthContext)
    const [like, setLike] = useState(false)

    const tip = useLoaderData()
    const {
        _id,
        title,
        topic,
        category,
        description,
        name,
        image,
        difficulty,
        userImage,
        likeCount,
    } = tip;
    const x = parseInt(likeCount)
    const [TotalLike, setTotalLike] = useState(x)


    useEffect(() => {
        fetch('https://garden-book-server-site-2.vercel.app/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user?.email })
        })
            .then(res => res.json())
            .then(result => {
                if (result.likedPost.find(p => p == _id)) {
                    setLike(true)
                }

            })
    }, [user, _id])





    const handeLike = (id) => {
        const newlikeCount = TotalLike + 1;
        setTotalLike(newlikeCount)
        fetch('https://garden-book-server-site-2.vercel.app/gardenbook/userinfo/update', {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email: user.email, id: id })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setLike(true)
            });

        fetch(`https://garden-book-server-site-2.vercel.app/updatelikecount/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ likeCount: newlikeCount })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            });
    }

    return (
        <div className='my-10 mx-4'>
            <div className="bg-secondary-content shadow-xl px-4 rounded-xl border border-gray-200 max-w-xl w-full mx-auto mb-6">
                <div className="flex items-center justify-between  py-3">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full border-accent-content border-2 overflow-hidden bg-green-100">
                            <img
                                src={userImage}
                                alt="Profile"
                                className="h-full w-full   object-cover"
                            />
                        </div>
                        <h1 className='text-accent-content'>{name}</h1>
                    </div>
                    <div >
                        {
                            like ?
                                <div className='flex flex-col-reverse items-center'>
                                    <BiSolidLike color='green' size={25}></BiSolidLike>
                                </div>
                                :
                                <BiLike onClick={() => handeLike(_id)} size={25}></BiLike>
                        }
                        <h2 className='text-green-700 text-center text-xs'>{TotalLike}</h2>
                    </div>
                </div>
                <div className="w-full h-60 border-accent-content border-2 overflow-hidden rounded-t-md">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="px-4 py-4 space-y-3">
                    <h2 className="text-xl font-semibold text-accent-content">{title}</h2>
                    <p className="text-sm text-accent-content leading-relaxed">{description}</p>

                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-800 rounded-full border border-blue-200">
                            Topic: {topic}
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-purple-50 text-purple-800 rounded-full border border-purple-200">
                            Category: {category}
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-yellow-50 text-yellow-800 rounded-full border border-yellow-200">
                            Difficulty: {difficulty}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TipDetails;