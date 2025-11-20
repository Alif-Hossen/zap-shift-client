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


import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const AuthProvider = ({ children }) => {

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        registerUser,
        signInUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;