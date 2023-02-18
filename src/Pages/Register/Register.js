import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex items-center justify-center h-screen p-5'>
            <div className='shadow-lg bg-lime-50 p-10 text-center'>
                <div className='pb-10'>
                    <p >Sign Up </p>
                    <p>Please Sign up to get full access</p>
                </div>
                <form action="">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="Enter Your Name" className="input input-bordered outline-none w-full" />
                    <div className='py-5'>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Enter Your Email" className="input input-bordered outline-none w-full" />
                    </div>
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="Enter Your Password" className="input input-bordered outline-none w-full" />
                </form>
                <p className='py-10'>Already have an account? <Link to='/login'>Login</Link> here.</p>
            </div>
        </div>
    );
};

export default Register;