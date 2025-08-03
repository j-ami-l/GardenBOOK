import React, { use } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import { Navigate } from 'react-router';
import Loading from '../Components/Loading';
import { UserInfoContext } from '../Provider/UserInfoProvider';

const PrivateRouter = ({children}) => {

    const {user , loading } = use(AuthContext)
    
    if(loading) return <Loading></Loading>

    if(!user)
        return <Navigate to={'/login'}></Navigate>


    return (
        children
    );
};

export default PrivateRouter;