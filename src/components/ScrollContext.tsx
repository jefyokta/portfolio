import React, { createContext, useState, useContext } from "react";

interface ScrollContextProps {
    sectionName: sectionNameInterface;
    setSectionName: (value: sectionNameInterface) => void;
}

interface sectionNameInterface {
    name: string,
    id: number
}



const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sectionName, setSectionName] = useState<sectionNameInterface>({ name: "introduction", id: 1 });

    return (
        <ScrollContext.Provider value={{ sectionName, setSectionName }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScrollContext = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error("useScrollContext must be used within a ScrollProvider");
    }
    return context;
};
