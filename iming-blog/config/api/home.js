import axios from 'axios';
const baseUrl = 'http://http://api.iming.top/default'

export function getArticleList(params = {}) {
    return axios(`${baseUrl}/getArticleList`, { params })
}

export function getArticleDetail(params = {}) {
    return axios(`${baseUrl}/getArticleDetail`, { params })
}

export function getTypeList(params = {}) {
    return axios(`${baseUrl}/getTypeList`)
}

export function getWebBaseInfo(params = {}) {
    return axios(`${baseUrl}/getWebBase`)
}
