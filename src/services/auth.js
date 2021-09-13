import API from './api';

async function login(data) {
    const response = await API.post("/auth/login", data)
        .catch(() => false)
    console.log(response.data)
    if(response === false) return false;
    else return response.data;
}

async function register(data) {
    const response = await API.post("/auth/sign-up", data)
        .catch(() => false)
    console.log(response.data)
    if(response === false) return false;
    else return response.data;
}

const Auth = {
    login,
    register
}

export default Auth;