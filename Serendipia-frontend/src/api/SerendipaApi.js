import axios from 'axios';

const { VITE_API_URL } = import.meta.env;

const serendipiaApi = axios.create({
    baseURL: VITE_API_URL + '/api',
})

// Interceptor para agregar el token de autenticación a las solicitudes
serendipiaApi.interceptors.request.use( config => {
    
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    };

    return config;
})

export default serendipiaApi;