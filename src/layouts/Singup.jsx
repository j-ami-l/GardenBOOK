import React, { useState, useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/Authprovider';

const SignUp = () => {
    const { register, updateuser, googleRegister } = useContext(AuthContext);
    const [error, setError] = useState(null);

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
            return;
        }


        register(email, password)
            .then((result) => {
                console.log(result);
                setError(null);
                updateuser({ displayName: name, photoURL: photo })
                    .then(() => {
                        fetch("http://localhost:3000/gardenbook/users", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify({ displayName: name, email: email, photoURL: photo , likedPost: [1,2,3]})
                        })
                            .then(res => res.json())
                            .then(result => {
                                console.log(result);

                            })
                    })
                    .catch((err) => {
                        setError(err.message);
                    });
                form.reset();
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    const handleGoogleSignUp = () => {
        googleRegister()
            .then((result) => {
                console.log(result);
                fetch("http://localhost:3000/gardenbook/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ displayName: result.user?.displayName,
                         email: result.user?.email, 
                         photoURL: result.user?.photoURL,
                        likedPost: [1,2,3]
                        })
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);

                    })
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <div className="min-h-screen my-10 flex items-center justify-center  px-4">
            <div className="w-full max-w-md p-8 shadow-lg bg-white rounded-lg">
                <h2 className="text-3xl font-bold text-center text-[#1A4D2E] mb-6">
                    Create an Account
                </h2>

                {error && (
                    <div className="text-red-500 text-sm mb-4 text-center border border-red-300 p-2 rounded">
                        {error}
                    </div>
                )}

                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input name="name" type="text" className="input input-bordered w-full" placeholder="Your name" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
                        <input
                            name="photo"
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="Photo URL"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input input-bordered w-full"
                            placeholder="example@mail.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input input-bordered w-full"
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
                        className="btn w-full flex items-center gap-3 border hover:bg-[#1A4D2E] hover:text-white"
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
