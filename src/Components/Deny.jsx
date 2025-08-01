import React from 'react';
import { Link } from 'react-router';

const Deny = () => {
    return (
        <div className="bg-gradient-to-br from-red-100 via-white to-red-50 min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-8 border border-red-200 text-center">
                <div className="flex flex-col items-center space-y-4">
                    <svg
                        className="w-16 h-16 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <h1 className="text-3xl font-bold text-red-600">Unauthorized Access</h1>
                    <p className="text-gray-600">You do not have permission to view this page.</p>
                    
                    <Link to={'/'} className="mt-6 inline-block bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">Go to Homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default Deny;
