import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/Authprovider';

const Login = () => {
  const { login, googleRegister } = use(AuthContext);
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        console.log(result);
        setError(null);
        form.reset();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleRegister()
      .then((result) => {
        console.log(result);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F4F6] px-4">
      <div className="w-full max-w-md p-8 shadow-lg bg-white rounded-lg">
        <h2 className="text-3xl font-bold text-center text-[#1A4D2E] mb-6">
          Sign in to Your Account
        </h2>

        {error && (
          <div className="text-red-500 text-sm mb-4 text-center border border-red-300 p-2 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
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

          <div className="flex justify-between items-center text-sm text-gray-600">
            <a className="link link-hover text-[#1A4D2E] className='text-[11px] md:text-[15px]'">Forgot password?</a>
            <span className='text-[11px] md:text-[15px]'>
              Don’t have an account?{' '}
              <Link to="/auth/register" className="text-[#1A4D2E] font-medium underline">
                Register
              </Link>
            </span>
          </div>

          <button
            type="submit"
            className="btn bg-[#1A4D2E] text-white w-full hover:bg-[#163d24]"
          >
            Login
          </button>

          <div className="divider text-sm text-gray-500">OR</div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn w-full flex items-center gap-3 border hover:bg-[#1A4D2E] hover:text-white"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google logo"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;