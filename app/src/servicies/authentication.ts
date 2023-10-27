import axios from "axios";

interface User {
    username: string;
    password: string;
}

const otherFields = (p: User) => ({
    ...p,
    name: '',
    lastname: '',
    image: ''
})

export const registerServicie = async (payload: User) =>
    await axios.post('http://localhost:3000/auth/register', payload)
        .then(r => r.data)
        .catch(e => e.response);

export const loginServicie = async (payload: User) =>
    await axios.post('http://localhost:3000/auth/login', payload)
        .then(r => r.data)
        .catch(e => e.response);