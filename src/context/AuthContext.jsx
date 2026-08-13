import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [username, setUsername] = useState(() => localStorage.getItem('username') || null);

    const login = (name) => {
        localStorage.setItem('username', name);
        setUsername(name);
    };

    const logout = () => {
        localStorage.removeItem('username');
        setUsername(null);
    };

    return (
        <AuthContext.Provider value={{ username, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}