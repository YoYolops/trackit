import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/img/logo.png';
import { Container } from '../style.js';
import { Button } from '../../../../components/sharedStyles';

function Register() {
    const [ isLoading, setIsLoading ] = useState(false);

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ nome, setNome ] = useState("");
    const [ foto, setFoto ] = useState("");

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
            <input
                placeholder="nome"
                type="text"
                value={nome}
                onChange={e => { setNome(e.target.value) }}
                required={true}
            />
            <input
                placeholder="foto"
                type="text"
                value={foto}
                onChange={e => { setFoto(e.target.value) }}
                required={true}
            />
            <Button filled={true} isLoading={isLoading}>
                { isLoading ? null : "Cadastrar" }
            </Button>

            <Link to="/auth/login">Já tem uma conta? Faça login!</Link>
        </Container>
    )
}

export default Register;