import { baseUrl } from './api';
import axios from 'axios';

const urls = {
    getArticleList: `${baseUrl}/article/getArticleList`,
    getArticleType: `${baseUrl}/type/getArticleType`,
    getArticleDetail: `${baseUrl}/article/getArticleDetail`,
    addArticle: `${baseUrl}/article/add`,
    editArticle: `${baseUrl}/article/edit`,
}

export function getArticleList() {
    return axios(urls.getArticleList, {
        method: 'get',
        withCredentials: true
    });
}

export function getArticleDetail(id) {
    return axios(urls.getArticleDetail, {
        method: 'get',
        withCredentials: true,
        params: { id }
    });
}

export function getArticleType() {
    return axios(urls.getArticleType, {
        method: 'get',
        withCredentials: true
    });
}

export function addArticle(data) {
    return axios(urls.addArticle, {
        method: 'post',
        data,
        withCredentials: true
    });
}

export function editArticle(data) {
    return axios(urls.editArticle, {
        method: 'post',
        data,
        withCredentials: true
    });
}


