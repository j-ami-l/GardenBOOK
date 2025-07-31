import React, { use } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { MdDelete } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import { AuthContext } from '../Provider/Authprovider';


const MyTipsTable = ({ tip }) => {

    const { user } = use(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const newPost = Object.fromEntries(formData.entries());

        
    }


    return (

        <Tr key={tip._id} className="border-t hover:bg-gray-50 text-sm text-gray-800">
            <Td className="p-3">
                <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-16 h-12 object-cover rounded-md border"
                />
            </Td>
            <Td className="p-3 font-medium">{tip.title}</Td>
            <Td className="p-3">{tip.topic}</Td>
            <Td className="p-3">{tip.category}</Td>
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
            <Td className="p-3 text-gray-500"><div className="space-x-2 flex items-center">
                <div onClick={() => document.getElementById('my_modal_1').showModal()} className=" border-green-200 border-2  p-2 rounded-[50%]"><FaPencil
                    size={18}
                    color='green'></FaPencil></div>
                <div className=" border-green-200 border-2  p-2 rounded-[50%]"><MdDelete
                    size={18}
                    color='green'
                ></MdDelete></div>
            </div></Td>
            <Td>
                <dialog id="my_modal_1" className="modal ">
                    <div className="modal-box ">
                        <div className="modal-action flex-col">
                            <form method="dialog" className='flex justify-end'>
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn hover:bg-red-900 hover:text-white">Close</button>
                            </form>
                            <form onSubmit={handleSubmit}>
                                {/* User avatar and name input */}
                                <div className="flex items-center mb-4">
                                    <div className="avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} alt="User" />
                                        </div>
                                    </div>
                                    <input
                                        readOnly
                                        type="text"
                                        name="name"
                                        value={user.displayName}
                                        placeholder="Your name"
                                        className="ml-1 focus:outline-0 focus:border-none caret-transparent select-none focus:ring-0 border-0 w-full max-w-xs text-gray-600 text-2xl font-semibold"
                                        required
                                    />
                                </div>

                                <textarea
                                    defaultValue={tip.description}
                                    name="description"
                                    className="textarea resize-none text-lg border-0 focus:outline-0 w-full mb-4"
                                    placeholder="Share your gardening tip..."
                                    rows={4}
                                    required
                                ></textarea>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input type="text" name="title" placeholder="Title" defaultValue={tip.title} className="input input-bordered w-full" required />
                                    <input type="text" name="topic" placeholder="Topic" defaultValue={tip.topic} className="input input-bordered w-full" required />
                                    <input type="text" name="category" placeholder="Category" defaultValue={tip.category} className="input input-bordered w-full" />
                                    <input type="email" name="email" readOnly value={user.email} placeholder="" className="input input-bordered w-full" />
                                    <input type="text" name="image" placeholder="Image URL" defaultValue={tip.image} className="input input-bordered w-full" />
                                    <div className='flex gap-1 w-full'>
                                        <select
                                            name="difficulty"
                                            defaultValue={tip?.difficulty || ""}
                                            className="select select-bordered"
                                            required
                                        >
                                            <option value="" disabled>
                                                Difficulty
                                            </option>
                                            <option value="Easy">Easy</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Hard">Hard</option>
                                        </select>
                                        <select name="availability" defaultValue={tip.availability} className="select select-bordered" required>
                                            <option value="Public">Public</option>
                                            <option value="Private">Private</option>
                                        </select>
                                    </div>
                                </div>

                                <button type="submit" className="btn w-full bg-[#12372A] text-white">
                                    Upload
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </Td>
        </Tr >

    );
};

export default MyTipsTable;