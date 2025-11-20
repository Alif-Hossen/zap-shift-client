import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { NavLink } from 'react-router';
import SOcialLogin from '../SocialLogin/SOcialLogin';

const Register = () => {

    const { registerUser } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm();

    const handleRegistration = (data) => {
        console.log('After Register', data);
        registerUser(data.email, data.password).then(result => {
            console.log(result.user);
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
                    <label className="label">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />

                    {
                        errors.email?.type === 'required' &&
                        <p className='text-red-500 font-bold'>Email Is Required.!</p>
                    }

                    <label className="label">Password</label>
                    <input type="password" {...register('password', {
                        required: true,
                        minLength: 6,
                        pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
                    })} className="input" placeholder="Password" />

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
                <p>Already Have An Account? <span className='text-blue-800 font-bold underline hover:text-green-800'><NavLink to="/login">Login</NavLink></span></p>
            </form>
        </div>
    );
};

export default Register;