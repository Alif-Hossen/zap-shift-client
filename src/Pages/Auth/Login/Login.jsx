import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { NavLink, useLocation, useNavigate } from 'react-router';
import SOcialLogin from '../SocialLogin/SOcialLogin';

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signInUser } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    // console.log('In The Login Page', location);

    const handleLogin = (data) => {
        console.log('Form Data', data);
        signInUser(data.email, data.password)
            .then(result => {
                console.log(result);
                navigate(location?.state || "/");
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='card bg-base-100  w-full mx-auto max-w-sm shrink-0 shadow-2xl'>
            <h2 className='text-3xl text-center'>Welcome Back</h2>
            <p className='text-center'>Please Login</p>

            <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset">

                    {/* EMAIL ->*/}
                    <label className="label">Email</label>
                    <input type="email" {...register('email', { required: true }

                    )} className="input" placeholder="Enter Your Email" />

                    {
                        errors.email?.type === 'required' &&
                        <p className='text-red-500 font-semibold'>
                            Email Must Requires For Login
                        </p>
                    }

                    {/* PASSWORD -> */}
                    <label className="label">Password</label>
                    <input type="password" {...register('password', {
                        required: true,
                        minLength: 6,

                    })} className="input" placeholder="Enter Your Password" />

                    {
                        errors.password?.type === 'minLength' &&
                        <p className='text-red-500 font-semibold'>
                            Password Must Be minimum 6 character.!
                        </p>
                    }



                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <SOcialLogin></SOcialLogin>

                <p>
                    New To Zap Shift? <span className='text-blue-800 font-bold underline hover:text-green-800'>
                        <NavLink
                            state={location.state}
                            to="/register">Register</NavLink></span>
                </p>
            </form>
        </div>

    );
};

export default Login;