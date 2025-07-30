import React, { useContext } from 'react'
import UserContext from './UserContext';
import { Navigate } from 'react-router-dom';

function UserRoute({ children }) {
    const { user, setUser } = useContext(UserContext);
    if (!user) {
        return <Navigate to="/login" />
    }
    return children;
}

export default UserRoute;