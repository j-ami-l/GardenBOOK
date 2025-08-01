import React, { use } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import { AuthContext } from '../Provider/Authprovider';
import Loading from '../Components/Loading';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    const {laoding} = use(AuthContext)
    if(laoding) return <Loading></Loading>
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;