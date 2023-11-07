import axios from 'axios';
import React from 'react';
import { Link } from '../redux/reducers/links-reducers';

function useProfilePublicHook(id: string) {
    const [profile, setProfile] = React.useState
        <{
            name: string,
            lastname: string,
            username: string,
            image: string,
            links: Link[]
        }>({
            name: "",
            lastname: "",
            username: "",
            image: "",
            links: [
                { type: "", url: "" },
                { type: "", url: "" },
                { type: "", url: "" },
                { type: "", url: "" },
                { type: "", url: "" }
            ]
        });

    React.useEffect(() => {
        if (id) {
            axios.get(import.meta.env.VITE_APP_BACKEND_URL + `/profile/${id}`)
                .then(r => setProfile(r.data))
                .catch(() => null)
        }
    }, [id]);

    return {
        profile
    }
}

export default useProfilePublicHook