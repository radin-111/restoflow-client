import React from 'react';
import AuthInfo from '../hooks/AuthInfo';
import { Navigate } from 'react-router';

const Private = ({ children }) => {
    const { user, loading } = AuthInfo();



    if (user) {
        return children;
    }

    if (loading) {
        return <span className="loading loading-spinner  text-error"></span>;
    }
    return <Navigate to='/login'></Navigate>

};

export default Private;