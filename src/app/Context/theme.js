'use client';

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <ThemeContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => useContext(ThemeContext);
