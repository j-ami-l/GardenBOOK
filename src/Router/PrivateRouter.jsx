import React, { use } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import { Navigate,  useLocation } from 'react-router';
import Loading from '../Components/Loading';
import { UserInfoContext } from '../Provider/UserInfoProvider';

const PrivateRouter = ({children}) => {

    const {user , loading } = use(AuthContext)
    const {userData} = use(UserInfoContext)
    
    const location = useLocation()
    if(loading) return <Loading></Loading>

    if(!user)
        return <Navigate to={'/login'} state={{from : location}}></Navigate>


    return (
        children
    );
};

export default PrivateRouter;