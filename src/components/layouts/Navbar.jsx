import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <ul className="flex justify-center items-center gap-16 bg-violet-500 p-3 font-bold text-2xl">
                <NavLink to="/order-review" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                    OrderReview
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                    About
                </NavLink>
                <NavLink to="/contact-us" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                    Contact Us
                </NavLink>
                <NavLink to="/users" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                    Users
                </NavLink>
            </ul>
        </>
    );
};

export default Navbar;
