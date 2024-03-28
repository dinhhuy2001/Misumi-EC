import { createContext, useState } from 'react';

const AuthContext = createContext({
    isLoggedIn: false,
    login: () => {},
});

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const token = sessionStorage.getItem('login');
        console.log(token);
        return token !== null;
    });
    const login = () => setIsLoggedIn(true);

    return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, login }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
