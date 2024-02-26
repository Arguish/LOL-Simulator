import { createContext, type FC, type ReactNode } from 'react';

export const GlobalContext = createContext({});

interface GlobalProviderProps {
    children: ReactNode;
}

export const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
    return (
        <>
            <GlobalContext.Provider value={{}}>
                {children}
            </GlobalContext.Provider>
        </>
    );
};
