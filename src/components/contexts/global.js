import { useState, useEffect, createContext } from 'react';

const GlobalContext = createContext({});

export function GlobalProvider({ children }) {
    const [ isLogged, setIsLogged ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ userData, setUserData ] = useState();

    useEffect(() => {
        function loadUserCredentials() {
            const userCredentials = JSON.parse(localStorage.getItem("trackit"));
            if(userCredentials) {
                setUserData({...userCredentials});
                setIsLogged(true);
                setLoading(false);
            }
        }
        loadUserCredentials();
    }, [])

    return (
        <GlobalContext.Provider value={{
            isLogged
        }}>
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalContext;