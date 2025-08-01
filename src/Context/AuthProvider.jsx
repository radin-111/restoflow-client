import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState(null)
    const [cUser, setCuser] = useState(null)
    const [quantity2,setQuantity2] = useState(null)
    
    const googleSign = () => {
        return signInWithPopup(auth, googleProvider)
    }




    const createUserEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogout = () => {
        return signOut(auth)
    }
    const handleEmailPasswordLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    useEffect(() => {
        setTimeout(() => {
            fetch('https://restaurant-management-server-bay.vercel.app/users')
                .then(res => res.json())
                .then(d => setUserData(d))
        }, 2000)
    }, [])
    useEffect(() => {
        setTimeout(() => {
            fetch('https://restaurant-management-server-bay.vercel.app/foods')
                .then(res => res.json())
                .then(d => setQuantity2(d))
        }, 4000)
    }, [])


    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
    }, [])

    

    const data = {
        user,
        setUser,
        quantity2,
        
        handleEmailPasswordLogin,
        googleSign,
        loading,
        userData,
        handleLogout,
        createUserEmail,
        setUserData,
        setCuser,
        cUser
    }
    return (
        <AuthContext value={data}>{children}</AuthContext>
    );
};

export default AuthProvider;