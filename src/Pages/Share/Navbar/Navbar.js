import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    console.log(user);

    const handleLogout = () => {
        logout();
    };

    const menu = <>
        <li><Link to='/'>Home</Link></li>
        <li><a>About</a></li>
        <li><a>Contact Us</a></li>
    </>;


    return (
        <div>
            <div className="navbar bg-blue-900 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {menu}

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">JOB PORTAL</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className='flex gap-5'>
                        {user?.uid ?
                            <button onClick={handleLogout}>Sign Out</button> :
                            <> <li><Link to='/login'>Sign In </Link></li>
                                <li> <Link to='/register'>Sign Up</Link></li></>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;