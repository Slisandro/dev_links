import api from "./index";
import { toast } from 'react-toastify';

interface User {
    username: string;
    password: string;
}

export const registerServicie = async (payload: User) =>
    await api.post('/auth/register', payload)
        .then(r => {
            toast("Register success", {
                position: toast.POSITION.BOTTOM_LEFT,
                className: "toast-message"
            })
            return r.data;
        })
        .catch(e => {
            toast(e.response.data.message ?? "Register error", {
                position: toast.POSITION.BOTTOM_LEFT,
                className: "toast-message"
            })
            return e.response
        });

export const loginServicie = async (payload: User) =>
    await api.post('/auth/login', payload)
        .then(r => {
            toast("Login success", {
                position: toast.POSITION.BOTTOM_LEFT,
                className: "toast-message"
            })
            return r.data;
        })
        .catch(e => {
            toast(e.response.data.message ?? "Login error", {
                position: toast.POSITION.BOTTOM_LEFT,
                className: "toast-message"
            })
            return e.response
        });
