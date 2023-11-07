import api from "./index";

interface Profile {
    userid: number;
    name: string;
    lastname: string;
    username: string;
    image: string;
    file?: any
}

export const updateImage = async (image: any) => {
    const formData = new FormData();

    formData.append('image', image);

    return await api.post('/profile/upload-image', formData, {
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

    console.log({ payload })

    if (payload.file?.size) {
        imageUrl = await updateImage(payload.file);

        return await api.put('/profile/update', { ...fields, image: imageUrl ?? payload.image })
            .then(r => r.data)
            .catch(e => e.response);
    };

    return await api.put('/profile/update', { ...fields })
        .then(r => r.data)
        .catch(e => e.response);
}