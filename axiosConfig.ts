import axios, { Axios } from 'axios'
const runtimeConfig=useRuntimeConfig()
const apiBaseUrl=runtimeConfig.public.apiBaseUrl;
const key=runtimeConfig.apiKey;
const customAxios = axios.create({
    baseURL:apiBaseUrl,
    params:{
        apiKey:key
    }
})

export default customAxios