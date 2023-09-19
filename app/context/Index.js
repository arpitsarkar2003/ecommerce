'use client';
import { createContext } from "react";

export const GlobalConetxt = createContext(null);

export default function GlobalState({childern}) {
    return (
        <GlobalConetxt.Provider value={{}}>
            {childern}
        </GlobalConetxt.Provider>
    )
}