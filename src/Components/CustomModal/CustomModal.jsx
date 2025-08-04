import React, { useState, useRef, useEffect, use } from "react";
import "./CustomModal.css"; // Import external CSS
import { AuthContext } from "../../Provider/Authprovider";
import Swal from "sweetalert2";
import { FaPencil } from "react-icons/fa6";

const CustomModal = ({ tip, handeUpdates }) => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);
    const { user } = use(AuthContext)




    const handleSubmitUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const UpdatePost = Object.fromEntries(formData.entries());

        fetch(`https://garden-book-server-site-2.vercel.app/mytips/update/${tip._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(UpdatePost)
        })
            .then(res => res.json())
            .then(() => {
                handeUpdates(UpdatePost)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Tip Updated",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    };

    return (
        <div>
            <div className="border-green-200 cursor-pointer border-2  p-2 rounded-[50%]" onClick={() => setIsOpen(true)}>
                <FaPencil
                    size={18}
                    color='' className='text-accent-content'></FaPencil>
            </div>


            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content bg-secondary-content p-5 rounded-2xl" ref={modalRef}>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>
                            ×
                        </button>
                        <form onSubmit={handleSubmitUpdate}>
                            <div className="flex items-center mb-4 gap-3">
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} alt="User" />
                                    </div>
                                </div>
                                <h1 className="caret-transparent select-none  border-0 w-full max-w-xs text-accent-content text-xl md:text-2xl font-semibold">{user.displayName}</h1>
                            </div>

                            <textarea
                                defaultValue={tip.description}
                                name="description"
                                className="textarea resize-none text-accent-content text-md md:text-lg border-0  w-full mb-4"
                                placeholder="Share your gardening tip..."
                                rows={4}
                                required
                            ></textarea>

                            <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input type="text" name="title" placeholder="Title" defaultValue={tip.title} className="input input-bordered text-accent-content w-full" required />
                                <input type="text" name="topic" placeholder="Topic" defaultValue={tip.topic} className="input input-bordered text-accent-content w-full" required />
                                <input type="text" name="category" placeholder="Category" defaultValue={tip.category} className="input input-bordered text-accent-content w-full" />
                                <input type="text" name="email" readOnly value={user.email} placeholder="" className="input  input-bordered text-accent-content w-full" />
                                <input type="text" name="image" placeholder="Image URL" defaultValue={tip.image} className="input input-bordered text-accent-content w-full" />
                                <div className='flex gap-1 w-full'>
                                    <select
                                        name="difficulty"
                                        defaultValue={tip.difficulty || ""}
                                        className="select select-bordered text-accent-content"
                                        required
                                    >
                                        <option value="" disabled>
                                            Difficulty
                                        </option>
                                        <option value="Easy">Easy</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Hard">Hard</option>
                                    </select>
                                    <select name="availability" defaultValue={tip.availability} className="select text-accent-content select-bordered" required>
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
            )}
        </div>
    );
};

export default CustomModal;
