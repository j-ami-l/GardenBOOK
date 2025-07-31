import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import { MdDelete } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
const MyTipsCard = ({ tip }) => {
    const { user } = useContext(AuthContext);

    const {
        title,
        topic,
        category,
        description,
        name,
        image,
        difficulty,
        availability,
    } = tip;

    // Choose color styles based on availability
    const availabilityStyle =
        availability === 'Public'
            ? 'text-green-700 bg-green-50 border-green-200'
            : 'text-red-700 bg-red-50 border-red-200';

    return (
        <div className="bg-white shadow-xl px-4 rounded-xl border border-gray-200 max-w-xl w-full mx-auto mb-6">
            {/* Header */}
            <div className="flex items-center justify-between  py-3">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-green-100">
                        <img
                            src={user?.photoURL}
                            alt="Profile"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div>
                        <p className="font-semibold text-sm text-gray-800">{name}</p>
                        <span className={`text-xs mb-2 px-2 py-0.5 border rounded-md ${availabilityStyle}`}>
                            {availability}
                        </span>
                    </div>
                </div>
                <div className="space-x-2 flex items-center">
                    <div className=" border-green-200 border-2  p-2 rounded-[50%]"><FaPencil
                    size={18}
                    color='green'></FaPencil></div>
                    <div className=" border-green-200 border-2  p-2 rounded-[50%]"><MdDelete
                        size={18}
                        color='green'
                    ></MdDelete></div>
                </div>
            </div>

            {/* Image */}
            <div className="w-full h-60 overflow-hidden rounded-t-md">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Body */}
            <div className="px-4 py-4 space-y-3">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                <p className="text-sm text-gray-700 leading-relaxed">{description}</p>

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
    );
};

export default MyTipsCard;
