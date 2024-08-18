import axios from "axios";

const BASE_URL = "https://65d1655fab7beba3d5e452c6.mockapi.io";

const instance = axios.create({
    baseURL: BASE_URL,
});

export const fetchAdvertsByPage = async (page) => {
    const adverts = await instance.get(`/materials?page=${page}&limit=4`);
    return adverts;
}

export const fetchAll = async () => {
    const adverts = await instance.get(`/materials`);
    return adverts;
}

