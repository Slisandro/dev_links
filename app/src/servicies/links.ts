import api from './index';

export const getLinkService = async (id: number) =>
    await api.get('/links/' + id)
        .then(r => r.data)
        .catch(e => e.response);

export const updateLinkService = async (id: number, links: { type: string, url: string }[]) =>
    await api.post('/links/update', {
        userid: id,
        objectdata: links
    })
        .then(r => r.data)
        .catch(e => e.response);