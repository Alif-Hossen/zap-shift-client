import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm();

    const handleRegistration = (data) => {
        console.log('After Register', data);
    }

    return (
        <div>
            <h2>Register Here</h2>
            <form onSubmit={handleSubmit(handleRegistration)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />

                    {
                        errors.email?.type==='required' && 
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
                        errors.password?.type=== 'minLength' && 
                        <p className='text-red-500 font-bold'>Password Should Be Minimum 6 Character</p>
                    }
                    {
                        errors.password?.type=== 'required' && 
                        <p className='text-red-500 font-semibold'>Password Is Required</p>
                    }
                    {
                        errors.password?.type=== 'pattern' &&
                        <p className='text-red-500 font-semibold'>Password Must Have At Least One UpperCase, One LowerCase, AT Least One Number And One Special Character.</p>
                    }


                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;