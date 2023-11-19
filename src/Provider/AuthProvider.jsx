/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext=createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    // const [authinfo,setAuthinfo]=useState(null);

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,curretnUser=>{
            setUser(curretnUser)
            console.log(curretnUser);
            setLoading(false)
        })
        return()=>{
            return unsubscribe();
        }
    })

     // user created
    const createUser=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
    }
//    user Signing in
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(email,password)
    }
    const authinfo={
        user,
        loading,
        error,
        isAuthenticated,
        createUser,
        signIn
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;