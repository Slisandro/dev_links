import axios from "axios";

interface Profile {
    userid: number;
    name: string;
    lastname: string;
    username: string;
    image: string;
    file: File
}

export const updateImage = async (image: File) => {
    const formData = new FormData();

    formData.append('image', image);

    return await axios.post('http://localhost:3000/profile/upload-image', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(r => r.data)
        .catch(e => e.response);
}

export const updateProfile = async (payload: Profile) => {
    let imageUrl;

    const fields = {
        userid: payload.userid,
        name: payload.name,
        lastname: payload.lastname,
        username: payload.username
    };

    if (payload.file) {
        imageUrl = await updateImage(payload.file);
    }

    return await axios.put('http://localhost:3000/profile/update', { ...fields, image: imageUrl ?? payload.image })
        .then(r => r.data)
        .catch(e => e.response);
}