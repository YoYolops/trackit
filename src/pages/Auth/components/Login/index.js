import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/img/logo.png';
import { Container } from '../style.js';
import { Button } from '../../../../components/sharedStyles';

function Login() {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

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
            <Button filled={true} isLoading={isLoading}>
                { isLoading ? null : "Entrar" }
            </Button>

            <Link to="/auth/register">
                Não tem uma conta? Cadastre-se
            </Link>
        </Container>
    )
}

export default Login;