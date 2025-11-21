import React from 'react';
import Logo from '../../../Components/Logo/Logo';
import { NavLink } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Navbar = () => {

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    const { user, logOut } = useAuth();

    const links = <>
        <li><NavLink>Services</NavLink></li>
        <li><NavLink>Something</NavLink></li>
        <li><NavLink to="/coverage" className={({ isActive }) => isActive ? 'active_link' : 'inActive_link'}>Coverage</NavLink></li>
        <li><NavLink to="/aboutUs" className={({ isActive }) => isActive ? 'active_link' : 'inActive_link'}>AboutUs</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm rounded-2xl mt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <NavLink to={'/'}>
                    <a className="btn btn-ghost text-xl">
                        <Logo></Logo>
                    </a>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <a onClick={handleLogOut} className="btn">Logout</a>
                        :
                        <NavLink className="btn" to="/login">Log in</NavLink>
                }

                <NavLink className="btn btn-primary text-black mx-4" to="/rider">Be A Rider</NavLink>

            </div>
        </div>
    );
};

export default Navbar;