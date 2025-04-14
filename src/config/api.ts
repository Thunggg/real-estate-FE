/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "./axios.customize";

// ****************************************** AUTH ******************************************
export const LoginAPI = async () => {
    const urlBackend = "/login";
    return axios.post(urlBackend);
};