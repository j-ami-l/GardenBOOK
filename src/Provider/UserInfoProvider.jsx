import React, { Children, createContext, use, useEffect, useState } from 'react';
import { AuthContext } from './Authprovider';
import Loading from '../Components/Loading';

export const UserInfoContext = createContext()

const UserInfoProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);
    const { user , loading } = use(AuthContext)
    const [loadingUserData, setLoadingUserData] = useState(true);

    

    useEffect(() => {
        if (user?.email) {
            fetch('https://garden-book-server-site-2.vercel.app/user', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email: user?.email })
            })
                .then(res => res.json())
                .then(result => {
                    setUserData(result)
                    setLoadingUserData(false);
                })
        }

    }, [user])


    const value = {
        user , userData , loadingUserData
    }

    return (
        <UserInfoContext value={value}>{children}</UserInfoContext>
    );
};

export default UserInfoProvider;