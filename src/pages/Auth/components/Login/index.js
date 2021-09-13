import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'
import Loader from "react-loader-spinner";

import logo from '../../../../assets/img/logo.png';
import { Container } from '../style.js';
import { Button } from '../../../../components/sharedStyles';
import GlobalContext from '../../../../components/contexts/global';

function Login() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const { login, isLoading, userData } = useContext(GlobalContext);

    if(userData) return <Redirect to="/main/today" />
    console.log("is loading: ", isLoading)
    return (
        <Container>
            <img src={logo} alt=""/>
            <input
                placeholder="email"
                type="text"
                value={email}
                onChange={e => { setEmail(e.target.value) }}
                required={true}
                disabled={isLoading}
            />
            <input
                placeholder="password"
                type="password"
                value={password}
                onChange={e => { setPassword(e.target.value) }}
                required={true}
                disabled={isLoading}
            />
            <Button disabled={isLoading} filled={true} isLoading={isLoading} onClick={() => {
                login({
                    email,
                    password
                })
            }}>
                { 
                    isLoading 
                        ? <Loader className="loadingIco" type="ThreeDots" color="#fff" height={10} /> 
                        : "Entrar"
                }
            </Button>

            <Link to="/auth/register">
                Não tem uma conta? Cadastre-se
            </Link>
        </Container>
    )
}

export default Login;