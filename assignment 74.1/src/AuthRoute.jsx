import React, { useContext } from 'react'
import UserContext from './UserContext';
import { Navigate } from 'react-router-dom';

function AuthRoute({ children }) {
    const { user, setUser } = useContext(UserContext);
    if (user) {
        return <Navigate to="/" />
    }
    return children;
}

export default AuthRoute;