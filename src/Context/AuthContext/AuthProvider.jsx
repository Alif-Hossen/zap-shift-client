// import React from 'react';
// import AuthContext from './AuthContext';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../Firebase/Firebase.init';

// const AuthProvider = ({ children }) => {

//     const registerUser = (email, password) => {
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     const signInUser = (email, password) => {
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     const authInfo = {
//         registerUser,
//         signInUser,
//     }

//     return (
//         <AuthContext value={authInfo}>
//             {children}
//         </AuthContext>
//     );
// };

// export default AuthProvider;


import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    // const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // CREATE USER ->
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // SIGNIN ->
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // SIGNIN WITH GOOGLE ->
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // OBSERVE ->
    useEffect(() => {

    } , [])

    const authInfo = {
        // user,
        loading,
        registerUser,
        signInUser,
        signInGoogle,

    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;