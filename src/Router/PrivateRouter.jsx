import React, { use } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import { Navigate } from 'react-router';

const PrivateRouter = ({children}) => {

    const {user } = use(AuthContext)

    if(!user)
        return <Navigate to={'/login'}></Navigate>


    return (
        children
    );
};

export default PrivateRouter;