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

export const FetchUserAPI = async () => {
    const urlBackend = "/auth/me";
    return axios.get<IBackendRes<IUser>>(urlBackend,
        {
            withCredentials: true,
        }
    );
};

export const LogoutAPI = async () => {
    const urlBackend = "/auth/logout";
    return axios.post<IBackendRes<any>>(urlBackend, {}, {
        withCredentials: true,
    });
};