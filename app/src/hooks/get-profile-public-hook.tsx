import React from 'react';
import { Link } from '../redux/reducers/links-reducers';
import { getPublicProfile } from '../servicies/public-profile';
import { toast } from 'react-toastify';

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
            getPublicProfile(id)
                .then(response => {
                    if (response) {
                        setProfile(response)
                    } else {
                        toast("Error getting profile", {
                            className: "toast-message"
                        })
                    }
                })
                .catch(() => {
                    console.log("ENTRA")
                })
        }
    }, [id]);

    return {
        profile
    }
}

export default useProfilePublicHook