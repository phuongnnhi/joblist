import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        if (username && password) {
            console.log('Login successful:', username);
            setUser({username})
            return true;
        }
        console.log('Login failed')
        return false;
    };

    const logout = () => {
        console.log('User logged out')
        setUser(null)};

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}