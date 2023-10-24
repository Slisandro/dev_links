import axios from "axios";

interface User {
    username: string;
    password: string;
}

export const registerServicie = async (payload: User) =>
    await axios.post('http://localhost:3000/auth/login', payload)
        .then(r => r)
        .catch(e => e.response);

export const loginServicie = async (payload: User) =>
    await axios.post('http://localhost:3000/auth/login', payload)
        .then(r => r)
        .catch(e => e.response);