import axios from 'axios';
import {API, TIMEOUT_AXIOS} from "./constants";

export const Api = axios.create({
    baseURL: API,
    timeout: TIMEOUT_AXIOS,
    headers: {
        Accept: 'application/json'
    },
});

Api.interceptors.response.use(
    (res) => {
        return res.data;
    },
    async (err) => {
        return Promise.reject(err);
    }
);
