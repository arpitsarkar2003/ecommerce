'use client';
import React, { createContext, useState, useMemo } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [showNavModal, setShowNavModal] = useState(false);

    return (
        <GlobalContext.Provider value={{ showNavModal, setShowNavModal }}>
            {children}
        </GlobalContext.Provider>
    );
}