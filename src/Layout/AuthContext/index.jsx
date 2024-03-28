import { createContext, useState } from 'react';

const AuthContext = createContext({
    isLoggedIn: false,
    login: () => {},
});

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const token = localStorage.getItem('loggedIn');
        return token !== null;
    });
    const login = () => setIsLoggedIn(true);

    if (sessionStorage.getItem('reloaded') !== 'yes') {
        localStorage.clear();
    }

    return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, login }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
