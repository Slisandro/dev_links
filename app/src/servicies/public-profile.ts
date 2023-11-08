import api from "./index";

export const getPublicProfile = async (id: string) => {
    return await api.get(`profile/${id}`)
    .then(r => r.data)
    .catch(() => null)
} 