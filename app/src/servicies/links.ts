import axios from 'axios';

export const getLinkService = async (id: number) =>
    await axios.get('http://localhost:3000/links/' + id)
        .then(r => r.data)
        .catch(e => e.response);

export const updateLinkService = async (id: number, links: { type: string, url: string }[]) =>
    await axios.post('http://localhost:3000/links/update', {
        userid: id,
        objectdata: links
    })
        .then(r => r.data)
        .catch(e => e.response);