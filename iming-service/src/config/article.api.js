import { baseUrl } from './api';
import axios from 'axios';

const urls = {
    getArticleList: `${baseUrl}/article/getArticleList`,
    getArticleType: `${baseUrl}/type/getArticleType`,
    addArticle: `${baseUrl}/article/add`,
}

export function getArticleList() {
    return axios(urls.getArticleList, {
        method: 'get'
    });
}

export function getArticleType() {
    return axios(urls.getArticleType, {
        method: 'get'
    });
}

export function addArticle(data) {
    return axios(urls.addArticle, {
        method: 'post',
        data
    });
}


