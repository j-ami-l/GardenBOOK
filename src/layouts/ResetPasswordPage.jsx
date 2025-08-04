import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/Authprovider';
import Swal from 'sweetalert2';

const ResetPasswordPage = () => {

    const [error, setError] = useState("")
    const { passwordReset } = use(AuthContext)
    const navigate = useNavigate()

    const handlePassReset = e => {

        e.preventDefault();
        const email = e.target.email.value;
        passwordReset(email)
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Resent Mail has been send successfully",
                    showConfirmButton: false,
                    timer: 4000
                });
                navigate('/login')

            })
            .catch(err => {
                const msg = err.message;
                setError(msg)
            })

    }
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center  px-4">
                <div className="w-full max-w-md p-8 shadow-lg bg-secondary-content rounded-lg">
                    <h2 className="text-3xl font-bold text-center color-primary mb-6">

                    </h2>
                    {error && (
                        <div className="text-red-500 text-sm mb-4 text-center border border-red-300 p-2 rounded">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handlePassReset} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-accent-content mb-1">Email</label>
                            <input
                                name="email"
                                type="email"
                                className="input bg-neutral input-bordered w-full"
                                placeholder="example@mail.com"
                                required
                            />
                        </div>
                        <div className="flex justify-between items-center text-sm text-gray-600">
                            <span className='text-[11px] text-primary md:text-[15px]'>
                                Don’t have an account?{' '}
                                <Link to="/signup" className="text-blue-400 font-medium underline">
                                    Register
                                </Link>
                            </span>
                        </div>
                        <button
                            type="submit"
                            className="btn bg-[#1A4D2E] text-white w-full hover:bg-[#163d24]"
                        >
                            Send mail
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;