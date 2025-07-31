import React, { use } from 'react';
import { AuthContext } from '../Provider/Authprovider';

const ShareTip = () => {

    const { user } = use(AuthContext)


    const handleSubmit = (e) => {
        e.preventDefault();


        const form = e.target;
        const formData = new FormData(form);
        const newPost = Object.fromEntries(formData.entries());

        fetch("http://localhost:3000/alltips", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                form.reset();
            })

        console.log(newPost);
    };

    return (
        <div className="max-w-2xl mx-5 md:mx-auto my-30">
            <div className="card bg-base-100 shadow-md p-6">
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-2 items-center mb-4">
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
                        name="description"
                        className="textarea resize-none text-lg border-0 focus:outline-0 w-full mb-4"
                        placeholder="Share your gardening tip..."
                        rows={4}
                        required
                    ></textarea>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" required />
                        <input type="text" name="topic" placeholder="Topic" className="input input-bordered w-full" required />
                        <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        <input type="email" readOnly name="email"  value={user.email} placeholder="" className="input input-bordered w-full" />
                        <input className='hidden' readOnly name='userImage' type="text" value={user.photoURL}/>
                        <input type="number" className='hidden' readOnly name='likeCount' type="text" value={0}/>
                        <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                        <div className='flex gap-1 w-full'>
                            <select name="difficulty" defaultValue={""} className="select select-bordered" required>
                                <option value="" disabled>Difficulty</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Midium</option>
                                <option value="Hard">Hard</option>
                            </select>
                            <select name="availability" defaultValue="" className="select select-bordered" required>
                                <option value="" disabled>
                                    Availability
                                </option>
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
    );
};

export default ShareTip;
