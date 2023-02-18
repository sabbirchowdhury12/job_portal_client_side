import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {

    const { createUserWithEmail, updateUserProfile } = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(email, name, password);

        createUserWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUserUpadateProfile(name);
                toast.success('register done');
                form.reset();
            }).catch(err => console.log(err));
    };

    const handleUserUpadateProfile = (name) => {
        const profile = {
            displayName: name,
        };
        updateUserProfile(profile)
            .then(() => { })
            .then(error => console.error(error));
    };

    return (
        <div className='flex items-center justify-center h-screen p-5'>
            <div className='shadow-lg bg-blue-900 p-10 text-center text-white'>
                <div className='pb-10'>
                    <p className='text-2xl font-bold' >Sign Up </p>

                </div>
                <form onSubmit={handleSubmit} action="">
                    <label className="label">
                        <span >Full Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered outline-none w-full text-black" />
                    <div className='py-5'>
                        <label className="label">
                            <span >Email</span>
                        </label>
                        <input type="text" name='email' placeholder="Enter Your Email" className="input input-bordered outline-none w-full text-black" />
                    </div>
                    <label className="label">
                        <span className="">Password</span>
                    </label>
                    <input type="text" name='password' placeholder="Enter Your Password" className="input input-bordered outline-none w-full text-black" />
                    <input type="submit" className='mt-5 bg-black py-2 px-5 rounded-sm font-bold' value='Sign up' />
                </form>
                <p className='py-10'>Already have an account? <Link to='/login'
                    className='underline'
                >Login</Link> here.</p>
            </div>
        </div>
    );
};

export default Register;