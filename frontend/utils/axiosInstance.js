import axios from 'axios'

const baseUrl = import.meta.env.VITE_DEV_ENV === 'development' ? 'http://localhost:9000' : 'https://ab-media-mt.onrender.com'
console.log('baseUrl  : ' , baseUrl);

const axiosInstance = axios.create({
    baseURL : baseUrl,
    withCredentials : true
});

export default axiosInstance