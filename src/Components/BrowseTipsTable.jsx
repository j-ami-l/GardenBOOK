import React from 'react';
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const BrowseTipsTable = ({ tip }) => {
    
    return (
        <Tr key={tip._id} className="border-t hover:bg-gray-50 text-sm text-gray-800">
            <Td className="p-3">
                <div className='space-y-1'>
                    <div className='btn btn-ghost btn-circle avatar'><div className='w-10 rounded-full'>
                        <img className='w-10 h-10 rounded-[50%]' src={tip.userImage} alt="" /></div></div>
                    <h1 className='text-[12px] font-bold'>{tip.name}</h1>
                </div>
            </Td>
            
            <Td className="p-3 font-medium">{tip.title}</Td>
            <Td className="p-3">{tip.topic}</Td>
            <Td className="p-3">
                <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-35 h-20 object-cover rounded-md border"
                />
            </Td>
            <Td className="p-3">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
                    {tip.difficulty}
                </span>
            </Td>
            
            <Td className="p-3 text-gray-500"><div className="space-x-2 flex items-center">
                <Link to={`/tipdetails/${tip._id}`} className='text-green-700 underline'>See more...</Link>
            </div></Td>
        </Tr >
    );
};

export default BrowseTipsTable;