import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../../assets/img/logo.png';
import { Container } from '../style.js';
import { Button } from '../../../../components/sharedStyles';
import GlobalContext from '../../../../components/contexts/globalContext';

function Register() {
    const { register } = useContext(GlobalContext);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ name, setName ] = useState("");
    const [ picture, setPicture ] = useState("");

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
                value={name}
                onChange={e => { setName(e.target.value) }}
                required={true}
            />
            <input
                placeholder="foto"
                type="text"
                value={picture}
                onChange={e => { setPicture(e.target.value) }}
                required={true}
            />
            <Button filled={true} isLoading={isLoading} onClick={() => {
                register({
                    email,
                    password,
                    name,
                    image: picture
                })
            }}>
                { isLoading ? null : "Cadastrar" }
            </Button>

            <Link to="/auth/login">Já tem uma conta? Faça login!</Link>
        </Container>
    )
}

export default Register;