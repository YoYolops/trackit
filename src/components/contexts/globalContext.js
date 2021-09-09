import { useState, useEffect, createContext } from 'react';

const GlobalContext = createContext({});

export function GlobalProvider({ children }) {
    const [ isLogged, setIsLogged ] = useState(false);
    const [ userData, setUserData ] = useState();

    useEffect(() => {
        function loadUserCredentials() {
            const userCredentials = JSON.parse(localStorage.getItem("trackit"));
            if(userCredentials) {
                setUserData({...userCredentials});
                setIsLogged(true);
            }
        }
        loadUserCredentials();
    }, [])

    return (
        <GlobalContext.Provider value={{
            isLogged,
            userData
        }}>
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalContext;