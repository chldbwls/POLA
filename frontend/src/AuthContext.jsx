import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

    const login = (token,userId) => {
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        setIsLoggedIn(true);
    }
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        setIsLoggedIn(false);
    }

    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem("token"));
    },[]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);