import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://laravelreact/api/v1/',
    headers: {
        "Content-Type": "application/json"
    }
    ,
    withCredentials: true,
});

// // Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sen

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response && response.data) {
        return response.data
    }
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error && error.response && error.response.data) {
        return error.response.data
    }
    return Promise.reject(error);
});

export default axiosInstance;