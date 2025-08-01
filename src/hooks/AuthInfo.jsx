import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const AuthInfo = () => {
    const data = use(AuthContext)
    
    return data;
};

export default AuthInfo;