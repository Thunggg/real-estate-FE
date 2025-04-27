import Password from "antd/es/input/Password";
import { LoginAPI } from "../config/api";
import axiosInstance from "../config/axios.customize"
import { message } from "antd";

type PayloadLogin = {
    email?: string;
    password?: string;
};

const LoginService = async (payload: PayloadLogin) => {
    const res = await LoginAPI(payload.email, payload.password);
    return res;
}

export { LoginService }

