import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';


export const AuthContext = createContext()


import { GoogleAuthProvider } from "firebase/auth";


const AuthProvider = ({ children }) => {

    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [userOtherInfo , setUserOtherInfo] = useState({})



    useEffect(() => {
        fetch(`http://localhost:3000/user`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email: user?.email })
        })
        .then(res=>res.json())
        .then(result=>{
            
            setUserOtherInfo(result)
            console.log(userOtherInfo);
            
        })
    }, [user])


    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateuser = (updates) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updates)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleRegister = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {

            unSubscribe;
        }
    }, [])


    const userInfo = {
        updateuser,
        login,
        user,
        register,
        logout,
        googleRegister,
        loading,
        userOtherInfo,
        setUserOtherInfo
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
