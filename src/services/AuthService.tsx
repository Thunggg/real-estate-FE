import Password from "antd/es/input/Password";
import { LoginAPI } from "../config/api";
import axiosInstance from "../config/axios.customize"

type PayloadLogin = {
    email?: string;
    password?: string;
};

const LoginService = (payload: PayloadLogin) => {
    const res = axiosInstance.post('/auth/login', {
        email: payload.email,
        password: payload.password
    });
    console.log(payload.email, payload.password);
}

export { LoginService }

