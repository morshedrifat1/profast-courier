import React, { use } from 'react';
import { AuthContext } from '../context/authcontext/AuthContext';

const useAuth = () => {
    const context = use(AuthContext)
    return context
};

export default useAuth;