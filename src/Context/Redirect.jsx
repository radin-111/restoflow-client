import React from 'react';
import AuthInfo from '../hooks/AuthInfo';
import { Navigate } from 'react-router';

const Redirect = ({ children }) => {
    const { user } = AuthInfo();
    if(user){
        return <Navigate to={'/'}></Navigate>
    }
    return children;
};

export default Redirect;