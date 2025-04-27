/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "./axios.customize";

// ****************************************** AUTH ******************************************
export const LoginAPI = async (email?: string, password?: string) => {
    const urlBackend = "/auth/login";
    return axios.post<IBackendRes<ILogin>>(urlBackend, {
        email: email,
        password: password
    }, {
        withCredentials: true,
    });
};