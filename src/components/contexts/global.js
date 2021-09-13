import { useState, useEffect, createContext } from 'react';
import validator from 'email-validator';

import Auth from '../../services/auth';

const GlobalContext = createContext({});

export function GlobalProvider({ children }) {
    const [ isLogged, setIsLogged ] = useState(false);
    const [ userData, setUserData ] = useState();
    const [ isLoading, setIsLoading ] = useState(false); // used to refresh app when server data is modified

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


    async function login(data) {
        setIsLoading(true)
        const isValidEmail = validator.validate(data.email);
        
        if(!isValidEmail) {
            alert("Insira um email válido");
            return;
        }
        const response = await Auth.login(data);
        if(response) {
            setIsLogged(true);
            setUserData(response);
            saveUserDataLocally({ //Prevents the password of being stored
                name: response.name,
                email: response.email,
                image: response.image,
                token: response.token,
                id: response.id
            });
        } else {
            alert("Esses dados parecem estar errados...")
        }
        setIsLoading(false)
    }

    async function register(data) {
        setIsLoading(true);
        const isValidEmail = validator.validate(data.email);

        if(!isValidEmail) {
            alert("Insira um email válido");
            return;
        }

        const response = await Auth.register(data);
        if(response) {
            window.location.href = "/";

        } else {
            alert("Desculpe, tivemos um problema...")
        }
        setIsLoading(false);
    }

    function saveUserDataLocally(data) {
        const trackit = JSON.stringify(data);
        localStorage.setItem("trackit", trackit);
    }

    function restartApp() { // It is never used, get rid off it
        localStorage.removeItem("trackit");
        setIsLogged(false);
        setUserData();
    }

    return (
        <GlobalContext.Provider value={{
            isLogged,
            userData,
            login,
            register,
            restartApp,
            isLoading
        }}>
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalContext;