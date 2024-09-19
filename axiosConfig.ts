import axios, { Axios } from 'axios'
const runtimeConfig = {
    apiKey: 'bda2ec0f',
    public: {
        apiBaseUrl: 'http://www.omdbapi.com',
        posterApiBaseUrl: 'http://img.omdbapi.com'
    }
};
const apiBaseUrl = runtimeConfig.public.apiBaseUrl;
const key = runtimeConfig.apiKey;
const customAxios = axios.create({
    baseURL: apiBaseUrl,
    params: {
        apiKey: key
    }
})

export default customAxios