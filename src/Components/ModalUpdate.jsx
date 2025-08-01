import React, { use } from 'react';

import Modal from 'react-modal';
import { AuthContext } from '../Provider/Authprovider';

const ModalUpdate = ({ tip , handeUpdates }) => {

    const {user} = use(AuthContext)

    const handleSubmitUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const UpdatePost = Object.fromEntries(formData.entries());

        fetch(`http://localhost:5000/mytips/update/${tip._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(UpdatePost)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                handeUpdates(UpdatePost)
            })
    }
    return (
        <div className=''>
            <dialog id={`${tip._id}modal`} className="modal">
                <div className="bg-white p-5 rounded-2xl">
                    <form method="dialog">
                        <div className='flex justify-end'><button className="btn">Close</button></div>
                    </form>
                    <div className="modal-action">
                        <form onSubmit={handleSubmitUpdate}>
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
                                className="textarea resize-none text-md md:text-lg border-0 focus:outline-0 w-full mb-4"
                                placeholder="Share your gardening tip..."
                                rows={4}
                                required
                            ></textarea>

                            <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input type="text" name="title" placeholder="Title" defaultValue={tip.title} className="input input-bordered w-full" required />
                                <input type="text" name="topic" placeholder="Topic" defaultValue={tip.topic} className="input input-bordered w-full" required />
                                <input type="text" name="category" placeholder="Category" defaultValue={tip.category} className="input input-bordered w-full" />
                                <input type="email" name="email" readOnly value={user.email} placeholder="" className="input focus:outline-0 input-bordered w-full" />
                                <input type="text" name="image" placeholder="Image URL" defaultValue={tip.image} className="input input-bordered w-full" />
                                <div className='flex gap-1 w-full'>
                                    <select
                                        name="difficulty"
                                        defaultValue={tip.difficulty || ""}
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
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ModalUpdate;