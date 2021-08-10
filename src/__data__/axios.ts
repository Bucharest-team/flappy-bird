import axios from 'axios';

import { BASE_API_URL, BACK_URL } from '../client/constants';

const axiosInstance = axios.create({
    baseURL: BASE_API_URL,
    withCredentials: true
});

export const axiosBack = axios.create({
    baseURL: BACK_URL,
    withCredentials: true
});

export default axiosInstance;
