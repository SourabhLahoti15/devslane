import { useState } from "react";
import AlertContext from "./AlertContext";

function AlertContextProvider({ children }) {
    const [alert, setAlert] = useState();
    return (
        <AlertContext.Provider value={{ alert, setAlert }}>
            {children}
        </AlertContext.Provider>
    );
}

export default AlertContextProvider;
