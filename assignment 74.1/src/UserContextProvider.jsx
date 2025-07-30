import { useEffect, useState } from "react";
import { createContext } from "react";
import UserContext from "./UserContext";
import axios from "axios";

function UserContextProvider({ children }) {
    const [user, setUser] = useState();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            axios
                .get("https://myeasykart.codeyogi.io/me", {
                    headers: { Authorization: token },
                })
                .then((response) => {
                    setUser(response.data);
                    // setLoading(false);
                });
        }
        // } else {
        //     // setLoading(false);
        // }
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
