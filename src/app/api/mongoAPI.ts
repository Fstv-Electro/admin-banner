// import axios from "axios";

// const api = axios.create({
//     baseURL: 'http://localhost:3000/api'
//     // baseURL: 'http://fstv-electro.github.io/admin-banner/api'
// });

// const mongoAPI = {
//     getAll: async () => {
//         try {
//             const res = await api.get(`/users`);
//             return res.data;
//         } catch (error) {
//             console.log(error)
//         }
//     },
//     getById: async (id: string) => {
//         try {
//             const res = await api.get(`/users/${id}`);
//             return res.data;
//         } catch (error) {
//             console.log(error)
//         }
//     }
// };

// export default mongoAPI;

// const baseURL='http://localhost:3000'
const endpoint = '/api/users';
const baseURL='http://fstv-electro.github.io/admin-banner'



export const  fetchAll = async () => {
    try {
        const res = await fetch(`${baseURL}${endpoint}`);
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error)
    }
}


export const  fetchById = async (id:string) => {
    try {
        const res = await fetch(`${baseURL}${endpoint}/${id}`);
        const data = await res.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}