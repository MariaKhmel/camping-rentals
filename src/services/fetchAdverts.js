import axios from "axios";

const BASE_URL = "https://65d1655fab7beba3d5e452c6.mockapi.io";

const instance = axios.create({
    baseURL: BASE_URL,
    params: {
        limit: 4,
    },
});

export const fetchAdverts = async () => {
    const adverts = await instance.get('/materials?page=1');
    return adverts;
}

export const fetchAdvertById = (id) => {
    const advert = instance.get(`/materials/${id}`);
    return advert;
};