import { baseUrl } from './api';
import axios from 'axios';

const urls = {
    getArticleType: `${baseUrl}/type/getArticleType`,
    addType: `${baseUrl}/type/addType`,
}


export function getArticleType() {
    return axios(urls.getArticleType, {
        method: 'get'
    });
}

export function addType(data) {
    return axios(urls.addType, {
        method: 'post',
        data
    });
}


