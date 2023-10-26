import axios from "axios";

interface Profile {
    name: string;
    lastname: string;
    email: string;
}

export const updateProfile = async (payload: Profile) =>
    await axios.put('http://localhost:3000/profile/', payload)
        .then(r => r.data)
        .catch(e => e.response);