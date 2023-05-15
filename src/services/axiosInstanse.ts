import axios from 'axios';
import {API} from "./constants";

export const Api = axios.create({
    baseURL: API,
    timeout: 8000,
    headers: {
        Accept: 'application/json'
    },
});
