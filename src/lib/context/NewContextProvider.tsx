import React, { createContext } from 'react';

const MyContext = createContext(null);

interface NewContextProviderProps {
    children: React.ReactNode;
}

const NewContextProvider:React.FC<NewContextProviderProps> = ({ children }) => {
    return (
        <MyContext.Provider value={null}>
            {children}
        </MyContext.Provider>
    );
};

export default NewContextProvider;
