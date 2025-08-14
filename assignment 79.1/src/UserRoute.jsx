import { Navigate } from 'react-router-dom';
import { withUser } from "./withProvider";

function UserRoute({ user, children }) {
    const token = localStorage.getItem("token");
    if (!user && !token) {
        return <Navigate to="/login" />
    }
    return children;
}

export default withUser(UserRoute);