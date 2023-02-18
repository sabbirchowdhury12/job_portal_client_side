import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {

    const { login } = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('hellow');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const currentUser = {
                    email: user.email
                };
                toast.success('login success');
            }).catch(error => {
                console.error(error);
            });
    };


    return (
        <div className='flex items-center justify-center h-screen p-5'>
            <div className='shadow-lg bg-lime-50 p-10 text-center'>
                <div className='pb-10'>
                    <p >Log In </p>
                    <p>Please Login to get full access</p>
                </div>
                <form action="" onSubmit={handleSubmit}>

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
                    <input type="submit" value='Login' />
                </form>
                <p className='py-10'> Dont't have an account? <Link to='/login'>Sign Up</Link> here.</p>
            </div>
        </div>
    );
};

export default Login;
