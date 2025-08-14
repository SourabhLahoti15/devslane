import { useEffect, useState } from "react";
import { createContext } from "react";
import UserContext from "./UserContext";
import axios from "axios";
import Loading from "./Loading";

function UserContextProvider({ children }) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            axios.get("https://myeasykart.codeyogi.io/me", {
                headers: { Authorization: token },
            }).then((response) => {
                setUser(response.data);
                setLoading(false);
            }).catch(() => {
                localStorage.removeItem("token");
                setLoading(false);
            })
        } else {
            setLoading(false);
        }
    });

    if (loading) {
        return <Loading />;
    }

    return (
        <UserContext.Provider value={{isLoggedIn: !!token, user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
