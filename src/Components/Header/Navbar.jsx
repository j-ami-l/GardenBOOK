import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import logo2 from '../../assets/logo2.png'
import { AuthContext } from '../../Provider/Authprovider';

const currentTheme = document.documentElement.getAttribute("data-theme");

const Navbar = () => {

    const { user, logout } = use(AuthContext)


    const handlelogout = () => {
        logout()
            .then()
            .catch()

    }

    const link = <>
        <>
            <li className=''><NavLink to="/" className="link-font">Home</NavLink></li>
            <li><NavLink to="/exploregardener" className="link-font">Explore Gardeners</NavLink></li>
            <li><NavLink to="/browsetips" className="link-font">Browse Tips</NavLink></li>
            <li><NavLink to="/sharetip" className="link-font">Share Tip</NavLink></li>
            <li><NavLink to="/mytips" className="link-font">My Tips</NavLink></li>
            {
                !user ?
                    <>
                        <li><NavLink to="/login" className="link-font">Login</NavLink></li>
                        <li><NavLink to="/signup" className="link-font">Signup</NavLink></li>
                    </>
                    :
                    <>
                        <li onClick={handlelogout}><Link className="link-font">Logout</Link></li>
                    </>
            }
        </>

    </>


    return (
        <div className="navbar bg-secondary shadow-sm  shadow-[#228B2230] ">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu   menu-sm dropdown-content  rounded-box z-1  space-y-3 w-52 p-2 shadow">
                    {
                        link
                    }
                </ul>
            </div>
            <div className="mx-auto  md:mx-0 md:flex-1">
                <Link to={'/'}><img
                    className="w-50"
                    src={logo}
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

            <div className="flex-none md:mr-5 group relative">

                <div role="" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src={user ? user.photoURL : "https://img.icons8.com/?size=100&id=14736&format=png&color=000000"} />
                    </div>
                </div>
                <input type="checkbox"  value="blacktheme" className="toggle theme-controller" />
            </div>

        </div>
    );
};

export default Navbar;