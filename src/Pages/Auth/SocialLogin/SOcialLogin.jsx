import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';

const SOcialLogin = () => {

    const { signInGoogle } = useAuth();

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='text-center'>
            <p className='text-l font-bold pb-2'>OR</p>
            <button

                onClick={handleGoogleSignIn}

                className="btn bg-white pb-2 w-full hover:bg-green-600 text-black border-[#e5e5e5]">
                <FcGoogle />
                Login with Google
            </button>
        </div>
    );
};

export default SOcialLogin;