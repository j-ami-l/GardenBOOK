import React, { use } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import { AuthContext } from '../Provider/Authprovider';
import Loading from '../Components/Loading';

const Root = () => {
    const {laoding} = use(AuthContext)
    if(laoding) return <Loading></Loading>
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;