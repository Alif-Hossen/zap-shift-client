import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { NavLink, useLocation, useNavigate } from 'react-router';
import SOcialLogin from '../SocialLogin/SOcialLogin';
import axios from 'axios';

const Register = () => {

    const { registerUser, updateUserProfile } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm();

    const location = useLocation();
    const navigate = useNavigate();
    console.log("In Register ", location);

    const handleRegistration = (data) => {
        console.log('After Register', data.photo[0]);
        const profileImg = data.photo[0];

        registerUser(data.email, data.password).then(result => {
            console.log(result.user);

            // HAVE TO STORE THE IMAGE AND GET THE PHOTO URL -->
            // 1. STORE THE IMAGE IN FROM DATA -

            const formData = new FormData();
            formData.append('image', profileImg);

            // 2. SEND THE PHOTO TO STORE AND GET THE URL -
            const img_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`

            axios.post(img_API_URL, formData)
                .then(res => {
                    console.log('After Image Upload', res.data.data.url)

                    // UPDATE USER PROFILE ( TO FIREBASE ) HERE ->
                    const userProfile = {
                        displayData : data.name,
                        photoURL : res.data.data.url,
                    }
                    updateUserProfile(userProfile)
                    .then( () => {
                        console.log("User Profile Updated Done..!");
                        navigate(location.state || "/");
                    })
                    .catch( error => {
                        console.log(error);
                    })
                })
        })
            .catch(error => {
                console.log(error)
            })
    }

    return (

        <div className='card bg-base-100  w-full mx-auto max-w-sm shrink-0 shadow-2xl'>
            <h2 className='text-3xl text-center'>Welcome To Zap Shift</h2>
            <p className='text-center'>Please Register</p>
            <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
                <fieldset className="fieldset">

                    {/* NAME -> */}
                    <label className="label">Name</label>
                    <input type="text" {...register('name', { required: true })} className="input" placeholder="Enter Your Name" />

                    {
                        errors.name?.type === 'required' &&
                        <p className='text-red-500 font-bold'>Name Is Required.!</p>
                    }

                    {/* PHOTO -> */}
                    <label className="label">Photo</label>
                    <input type="file" {...register('photo', { required: true })} className="file-input" placeholder="Choose Your Photo" />

                    {
                        errors.photo?.type === 'required' &&
                        <p className='text-red-500 font-bold'>Photo Is Required.!</p>
                    }

                    {/* EMAIL -> */}
                    <label className="label">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input" placeholder="Enter Your Email" />

                    {
                        errors.email?.type === 'required' &&
                        <p className='text-red-500 font-bold'>Email Is Required.!</p>
                    }

                    {/* PASSWORD -> */}
                    <label className="label">Password</label>
                    <input type="password" {...register('password', {
                        required: true,
                        minLength: 6,
                        pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
                    })} className="input" placeholder="Enter Your Password" />

                    {/* ERROR SHOW --> */}
                    {
                        errors.password?.type === 'minLength' &&
                        <p className='text-red-500 font-bold'>Password Should Be Minimum 6 Character</p>
                    }
                    {
                        errors.password?.type === 'required' &&
                        <p className='text-red-500 font-semibold'>Password Is Required</p>
                    }
                    {
                        errors.password?.type === 'pattern' &&
                        <p className='text-red-500 font-semibold'>Password Must Have At Least One UpperCase, One LowerCase, AT Least One Number And One Special Character.</p>
                    }


                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>

                    <SOcialLogin></SOcialLogin>

                </fieldset>

                <p>Already Have An Account? <span className='text-blue-800 font-bold underline hover:text-green-800'>
                    <NavLink 
                        state={location.state}
                        to="/login">Login</NavLink></span></p>
            </form>
        </div>
    );
};

export default Register;

