import { LoginAPI } from "../config/api";
import axiosInstance from "../config/axios.customize"

type PayloadLogin = {
    email?: string;
    password?: string;
};

const LoginService = (payload: PayloadLogin) => {
    const res = axiosInstance.post('/login');
    console.log(res);
}

export { LoginService }

