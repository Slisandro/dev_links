import api from "./index";

interface User {
    username: string;
    password: string;
}

export const registerServicie = async (payload: User) =>
    await api.post('/auth/register', payload)
        .then(r => r.data)
        .catch(e => e.response);

export const loginServicie = async (payload: User) =>
    await api.post('http://localhost:3000/auth/login', payload)
        .then(r => r.data)
        .catch(e => e.response);