import axios from "axios";

const { NEXT_PUBLIC_STRAPI_URL, STRAPI_API_TOKEN_READONLY } = process.env;

export async function fetcher(url: string, options = {}) {
    let response;
    if (!options) {
        response = await fetch(url);
    } else {
        response = await fetch(url, options);
    }
    const data = await response.json();
    return data;
}

const api = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {'bearer': STRAPI_API_TOKEN_READONLY}
});

const sectionsAPI = {
    getAll: async () => {
        try {
            const res = await api.get(`/sections?populate=*`);
            return res.data;
        } catch (error) {
            console.log(error)
        }
    },
    getSections: async () => {
        try {
            const res = await api.get(`/sections?populate[sections][populate]=image.data`);
            console.log(res.data)
            return res;
        } catch (error) {
            console.log(error)
        }
    }
};

export default sectionsAPI;