import axios from "axios"

const BASE_URL = 'https://swapi.dev/api'
const http = axios.create({
    baseURL: BASE_URL
})

http.interceptors.request.use(config => {
        config.headers['Accept'] = 'application/json';
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => Promise.reject(error)
);

http.interceptors.response.use(res => res,
    error => Promise.reject(error));

export default http