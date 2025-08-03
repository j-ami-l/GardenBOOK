import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import logo2 from '../../assets/logo2.png'
import { AuthContext } from '../../Provider/Authprovider';
import { UserInfoContext } from '../../Provider/UserInfoProvider';
import { Tooltip } from 'react-tooltip'


const Navbar = () => {

    const [Logout, setLogout] = useState(false)
    const { user, logout } = use(AuthContext)
    const [ThemeLogo, setThemeLogo] = useState(false)
    const { userData, setUserData } = use(UserInfoContext)


    const handlelogout = () => {
        logout()
            .then()
            .catch()
        setLogout(true)
    }



    const link = <>
        <>
            <li className='text-accent-content'><NavLink to="/" className="link-font">Home</NavLink></li>
            <li className='text-accent-content'><NavLink to="/exploregardener" className="link-font">Explore Gardeners</NavLink></li>
            <li className='text-accent-content'><NavLink to="/browsetips" className="link-font">Browse Tips</NavLink></li>
            <li className='text-accent-content'><NavLink to="/sharetip" className="link-font">Share Tip</NavLink></li>
            <li className='text-accent-content'><NavLink to="/mytips" className="link-font">My Tips</NavLink></li>
            {
                !user ?
                    <>
                        <li className='text-accent-content'><NavLink to="/login" className="link-font">Login</NavLink></li>
                        <li className='text-accent-content'><NavLink to="/signup" className="link-font">Signup</NavLink></li>
                    </>
                    :
                    <>

                    </>
            }
        </>

    </>


    return (
        <div className="navbar md:px-10 bg-secondary shadow-sm  shadow-[#228B2230] ">
            <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-content" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu  bg-secondary-content  menu-sm dropdown-content  rounded-box z-1  space-y-3 w-52 p-2 shadow">
                    {
                        link
                    }
                </ul>
            </div>
            <div className="mx-auto  md:mx-0 md:flex-1">
                <Link to={'/'}><img
                    className="w-50"
                    src={!ThemeLogo ? logo : logo2}
                    alt=""
                />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-accent font-bold text-[16px] px-1">
                    {
                        link
                    }
                </ul>
            </div>

            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <a
                            data-tooltip-id="my-tooltip"
                        >
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={userData?.photoURL ? userData.photoURL : "https://img.icons8.com/?size=100&id=20750&format=png&color=000000"} />
                        </a>
                        <Tooltip id="my-tooltip" place='top'>
                            {user && user.displayName}
                        </Tooltip>
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-secondary-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <label className="flex cursor-pointer gap-2">
                            <span className="label-text text-xl">light</span>
                            <input type="checkbox" onClick={() => setThemeLogo(!ThemeLogo)} value="blacktheme" className="toggle theme-controller" />
                            <span className="label-text text-xl">Dark</span>
                        </label>
                    </li>
                    {
                        user && <li onClick={handlelogout}><a className='text-xl'>Logout</a></li>
                    }
                </ul>
            </div>

        </div>
    );
};

export default Navbar;