import API from './api';

export async function login(data) {
    const response = await API.post("/auth/login", data)
        .catch(() => false)

    if(response === false) return false;
    else return response.data;
}

export async function register(data) {
    const response = await API.post("/auth/sign-up")
        .catch(() => false)

    if(response === false) return false;
    else return response.data;
}