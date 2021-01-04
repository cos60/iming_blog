import { baseUrl } from './api';
import axios from 'axios';

const urls = {
    login: `${baseUrl}/login`,
}

export function login(data) {
    return axios(urls.login, {
        method: 'post',
        data,
        withCredentials: true
    });
}
