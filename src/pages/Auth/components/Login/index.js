import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../../assets/img/logo.png';
import { Container } from '../style.js';
import { Button } from '../../../../components/sharedStyles';
import GlobalContext from '../../../../components/contexts/globalContext';

function Login() {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const { login } = useContext(GlobalContext);

    return (
        <Container>
            <img src={logo} alt=""/>
            <input
                placeholder="email"
                type="text"
                value={email}
                onChange={e => { setEmail(e.target.value) }}
                required={true}
            />
            <input
                placeholder="password"
                type="text"
                value={password}
                onChange={e => { setPassword(e.target.value) }}
                required={true}
            />
            <Button filled={true} isLoading={isLoading} onClick={() => {
                login({
                    email,
                    password
                })
            }}>
                { isLoading ? null : "Entrar" }
            </Button>

            <Link to="/auth/register">
                Não tem uma conta? Cadastre-se
            </Link>
        </Container>
    )
}

export default Login;