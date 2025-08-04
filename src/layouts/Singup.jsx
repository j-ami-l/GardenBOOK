import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/Authprovider';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { register, updateuser, googleRegister } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, name, photo } = Object.fromEntries(formData.entries());

        const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if (!passPattern.test(password)) {
            setError(
                'Password must have at least 1 uppercase, 1 lowercase, 1 digit, and be at least 8 characters.'
            );
            Swal.fire({
                text: 'Password must have at least 1 uppercase, 1 lowercase, 1 digit, and be at least 8 characters.',
                icon: "error",
                title: "Oops...",
            });

            return;
        }



        register(email, password)
            .then(() => {
                setError(null);
                toast.success("Registerd Account Successfully")
                updateuser({ displayName: name, photoURL: photo })
                    .then(() => {
                        fetch('https://garden-book-server-site-2.vercel.app/adduser', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify({ displayName: name, photoURL: photo, email: email, likedPost: [1, 2], role: "" })
                        })
                        navigate('/');
                    })
                    .catch((err) => {
                        setError(err.message);
                        toast.error(error)
                    });
                form.reset();
            })
            .catch((err) => {
                setError(err.message);
                toast.error(error)
            });
    };

    const handleGoogleSignUp = () => {
        googleRegister()
            .then((result) => {
                fetch('https://garden-book-server-site-2.vercel.app/adduser', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ displayName: result?.user?.displayName, photoURL: result?.user?.photoURL, email: result?.user?.email, likedPost: [1, 2], role: "" })
                })
                toast.success("Registerd Account Successfully")
                navigate('/');
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                toast.error(error)
            });
    };


    return (
        <div className="min-h-screen my-10 flex items-center justify-center  px-4">
            <div className="w-full max-w-md p-8 shadow-lg bg-secondary-content rounded-lg">
                <h2 className="text-3xl font-bold text-center text-accent-content mb-6">
                    Create an Account
                </h2>

                {error && (
                    <div className="text-red-500 text-sm mb-4 text-center border border-red-300 p-2 rounded">
                        {error}
                    </div>
                )}

                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-accent-content mb-1">Name</label>
                        <input name="name" type="text" className="input bg-neutral input-bordered w-full" placeholder="Your name" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-accent-content mb-1">Photo URL</label>
                        <input
                            name="photo"
                            type="text"
                            className="input input-bordered bg-neutral w-full"
                            placeholder="Photo URL"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-accent-content mb-1">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input input-bordered bg-neutral w-full"
                            placeholder="example@mail.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-accent-content mb-1">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input input-bordered bg-neutral w-full"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn bg-[#1A4D2E] text-white w-full hover:bg-[#163d24]"
                    >
                        Register
                    </button>

                    <div className="divider text-sm text-gray-500">OR</div>

                    <button
                        type="button"
                        onClick={handleGoogleSignUp}
                        className="btn w-full flex items-center bg-neutral gap-3 border hover:bg-[#1A4D2E] hover:text-white"
                    >
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google logo"
                            className="w-5 h-5"
                        />
                        Continue with Google
                    </button>

                    <p className="text-sm mt-4 text-center text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-[#1A4D2E] font-medium underline">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
