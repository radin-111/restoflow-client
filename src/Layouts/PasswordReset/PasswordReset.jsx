
import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";

import Swal from "sweetalert2";
import { auth } from "../../Firebase/firebase.init";

const PasswordReset = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");
        if (!email) {
            setError("Please enter your email address.");
            return;
        }

        setLoading(true);
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("Check your email for password reset instructions.");
            setEmail("");

            // Success Swal popup
            Swal.fire({
                icon: "success",
                title: "Email Sent!",
                text: "Check your inbox for password reset instructions.",
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false,
            });
        } catch (err) {
            setError(err.message || "Failed to send reset email.");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 ">
            <div className=" rounded-lg shadow-xl max-w-md w-full p-8 bg-white">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
                    Reset Your Password
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6 text-black">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    {message && (
                        <p className="text-green-600 font-medium">{message}</p>
                    )}
                    {error && <p className="text-red-600 font-medium">{error}</p>}

                    <button
                        type="submit"
                        disabled={loading}
                        className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span className="absolute bottom-0 left-0 h-full -ml-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-auto h-full opacity-100 object-stretch"
                                viewBox="0 0 487 487"
                            >
                                <path
                                    fillOpacity=".1"
                                    fillRule="nonzero"
                                    fill="#FFF"
                                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                                ></path>
                            </svg>
                        </span>
                        <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="object-cover w-full h-full"
                                viewBox="0 0 487 487"
                            >
                                <path
                                    fillOpacity=".1"
                                    fillRule="nonzero"
                                    fill="#FFF"
                                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                                ></path>
                            </svg>
                        </span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
                        <span className="relative text-base font-semibold">
                            {loading ? "Sending..." : "Send Reset Email"}
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PasswordReset;
