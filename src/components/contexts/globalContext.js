import { useState, useEffect, createContext } from 'react';
import validator from 'email-validator';
import Auth from '../../services/auth';

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

    function login(data) {
        const isValidEmail = validator.validate(data.email);
        
        if(!isValidEmail) {
            alert("Insira um email válido");
            return;
        }
        const response = Auth.login(data);
        if(response) {
            setIsLogged(true);
            setUserData(response);
        }
    }

    return (
        <GlobalContext.Provider value={{
            isLogged,
            userData,
            login
        }}>
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalContext;