import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';


export const AuthContext = createContext()


import { GoogleAuthProvider } from "firebase/auth";


const AuthProvider = ({children}) => {
    
    const provider = new GoogleAuthProvider();
    const [user , setUser] = useState(null)



    const register = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const login = (email , password) =>{
        return signInWithEmailAndPassword(auth , email , password)
    }

    const updateuser = (updates) =>{
        return updateProfile(auth.currentUser , updates)
    }

    const logout = () =>{
        return signOut(auth)
    }

    const googleRegister = () =>{
        return signInWithPopup(auth , provider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            
            unSubscribe;
        } 
    }, [])


    const  userInfo = {
        updateuser,
        login,
        user,
        register,
        logout,
        googleRegister
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
