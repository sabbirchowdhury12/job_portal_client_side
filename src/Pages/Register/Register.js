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
            <div className='shadow-lg bg-lime-50 p-10 text-center'>
                <div className='pb-10'>
                    <p >Sign Up </p>
                    <p>Please Sign up to get full access</p>
                </div>
                <form onSubmit={handleSubmit} action="">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered outline-none w-full" />
                    <div className='py-5'>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="Enter Your Email" className="input input-bordered outline-none w-full" />
                    </div>
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" name='password' placeholder="Enter Your Password" className="input input-bordered outline-none w-full" />
                    <input type="submit" value='Sign up' />
                </form>
                <p className='py-10'>Already have an account? <Link to='/login'>Login</Link> here.</p>
            </div>
        </div>
    );
};

export default Register;