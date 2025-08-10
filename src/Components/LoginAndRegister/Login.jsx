import React from 'react';
import { Link, useNavigate } from 'react-router';
import AuthInfo from '../../hooks/AuthInfo';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const { googleSign, handleEmailPasswordLogin } = AuthInfo();
    const navigate = useNavigate()


    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        handleEmailPasswordLogin(email, password)
            .then(() => {

            })
            .catch(err => {
                toast.error(err.message)
            })

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
        <div className="flex items-center justify-center min-h-screen px-4">
            <title>Login</title>
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6">

                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800">Welcome Back!</h2>
                    <p className="text-sm text-gray-500 mt-2">Please login to continue</p>
                </div>


                <form className="space-y-4" onSubmit={handleLogin}>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            name='email'
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name='password'
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                    >
                        Login
                    </button>
                </form>


                <div>
                    <button onClick={handleGoogleLogin} className="btn bg-white text-black w-full border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>


                <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-blue-600 hover:underline font-medium">
                        Register here
                    </Link>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;