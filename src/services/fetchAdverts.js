import axios from "axios";

const BASE_URL = "https://65d1655fab7beba3d5e452c6.mockapi.io/materials";

const instance = axios.create({
    baseURL: BASE_URL,
    params: {
        limit: 4,
    },
});

export const fetchAdverts = () => {
    const adverts = instance.get('/materials');
    return adverts;
}

export const fetchAdvertById = (id) => {
    const advert = instance.get(`/materials/${id}`);
    return advert;
};