import API from './api';

async function login(data) {
    console.log("service login")
    const response = await API.post("/auth/login", data)
        .catch(() => false)
    console.log(response.data)
    if(response === false) return false;
    else return response.data;
}

async function register(data) {
    console.log("service register")
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