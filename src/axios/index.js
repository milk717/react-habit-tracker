import axios from 'axios';

const BASE_URL = '';
const JSON_SERVER_URL = 'http://localhost:4000';

const instance =  axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

export const jsonServer = axios.create({
    baseURL: JSON_SERVER_URL,
    timeout: 2000,
})

export default instance;