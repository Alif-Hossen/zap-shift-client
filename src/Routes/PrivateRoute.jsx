import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const location  = useLocation();
    // console.log("See Location",location);

    if (loading) {
        return <div className=''>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    }
    if(!user) {
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }

    return children;
};

export default PrivateRoute;