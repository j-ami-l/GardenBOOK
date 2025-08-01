
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { MdDelete } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import ModalUpdate from './ModalUpdate';
import { useState } from 'react';




const MyTipsTable = ({ SingleTip , handleDelete }) => {
    
    const [tip , setTips] = useState(SingleTip)

    const handeUpdates = e =>{
        setTips(e)
    }
    

    return (

        <Tr key={tip._id} className="border-t border-accent-content text-sm text-gray-800">
            <Td className="p-3">
                <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-35 h-20 object-cover rounded-md border border-accent-content"
                />
            </Td>
            <Td className="p-3 text-accent-content font-medium">{tip.title}</Td>
            <Td className="p-3 text-accent-content">{tip.topic}</Td>
            <Td className="p-3 text-accent-content">{tip.category}</Td>
            <Td className="p-3">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
                    {tip.difficulty}
                </span>
            </Td>
            <Td className="p-3">
                <span className={`px-2 py-1 rounded text-xs font-medium ${tip.availability === 'Public' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {tip.availability}
                </span>
            </Td>
            <Td className="p-3 text-gray-500 "><div className="space-x-2 flex items-center">
                <div onClick={() => document.getElementById(`${tip._id}modal`).showModal()} className=" border-green-200 cursor-pointer border-2  p-2 rounded-[50%]"><FaPencil
                    size={18}
                    color='' className='text-accent-content'></FaPencil></div>
                <div onClick={() => handleDelete(tip._id)} className="cursor-pointer border-green-200 border-2  p-2 rounded-[50%]"><MdDelete
                    size={18}
                    color=''
                    className='text-accent-content'
                ></MdDelete></div>
            </div></Td>
            <Td>
                <ModalUpdate handeUpdates={handeUpdates} tip={tip}></ModalUpdate>
            </Td>
        </Tr >

    );
};

export default MyTipsTable;