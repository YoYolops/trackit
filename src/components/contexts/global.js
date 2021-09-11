import { useState, useEffect, createContext } from 'react';
import validator from 'email-validator';
import Auth from '../../services/auth';

const GlobalContext = createContext({});

export function GlobalProvider({ children }) {
    const [ isLogged, setIsLogged ] = useState(false);
    const [ userData, setUserData ] = useState();
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        console.log("context useEffect")
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
            saveUserDataLocally(response);
        }
        setIsLoading(false)
    }

    async function register(data) {
        console.log("context register")
        const isValidEmail = validator.validate(data.email);

        if(!isValidEmail) {
            alert("Insira um email válido");
            return;
        }

        const response = await Auth.register(data);
        if(response) {
            setIsLogged(true);
            setUserData(response);
            window.location.href = "/"
        } else {
            alert("Desculpe, tivemos um problema...")
        }
    }

    function saveUserDataLocally(data) {
        const trackit = JSON.stringify(data);
        localStorage.setItem("trackit", trackit);
    }

    return (
        <GlobalContext.Provider value={{
            isLogged,
            userData,
            login,
            register
        }}>
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalContext;