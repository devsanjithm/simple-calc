import React, { createContext, useState, useEffect } from "react";
import { auth, onAuthStateChanged } from "./firebase";
import Loading from "./Component/Loading";
const UserContext = createContext({});

const ContextProvider = ({ children }) => {

    const [user, setUser] = useState("");
    const [loadscreen, setloadscreen] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            setloadscreen(false);
        });
    }, [])

    return (
        <UserContext.Provider
            value={{ user, setUser, loadscreen, setloadscreen }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, ContextProvider };