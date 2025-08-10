import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import AuthInfo from '../../hooks/AuthInfo';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

const Register = () => {
    const { googleSign, createUserEmail } = AuthInfo();
    const navigate = useNavigate()
    const [error, setError] = useState(false)


    const handleRegister = (e) => {
        e.preventDefault();
        const data = e.target;
        const formD = new FormData(data);
        const form = Object.fromEntries(formD.entries())
        const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        const verify = pattern.test(form.password);
        const { name, email, password, photo_url } = form
        const details = { name, email, photo_url }
        if (!verify) {
            setError(true)
            return;
        }
        else {
            setError(false);
            createUserEmail(email, password)
                .then(() => {
                    axios.post("https://restaurant-management-server-bay.vercel.app/users", details)
                        .then(() => {

                        })
                })
                .catch(err => {
                    toast.error(err.message)
                })

        }

    }
    const handleGoogleLogin = () => {
        googleSign()
            .then(() => {
                navigate('/')

            })
            .catch(() => {


            })
    }
    return (
        <div className=" flex items-center justify-center min-h-screen px-4">
            <title>Register</title>
            <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-lg p-6 space-y-6">

                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800">Create an Account</h2>
                    <p className="text-sm text-gray-500 mt-2">Please register to continue</p>
                </div>


                <form className="space-y-4 text-black " onSubmit={handleRegister}>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name='name'
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            aria-required="true"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            name='email'
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            aria-required="true"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL </label>
                        <input
                            type="url"
                            name='photo_url'
                            placeholder="https://example.com/your-photo.jpg"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            aria-required="true"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name='password'
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            aria-required="true"
                        />
                        {
                            error && <p className="mt-1 font-bold  text-red-500">
                                Must have uppercase, lowercase & at least 6 characters
                            </p>
                        }
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                    >
                        Register
                    </button>
                </form>

                <div>
                    <button onClick={handleGoogleLogin} className="btn bg-white text-black w-full border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Register with Google
                    </button>
                </div>


                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-600 hover:underline font-medium">
                        Login here
                    </Link>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;