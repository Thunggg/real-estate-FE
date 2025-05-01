import Password from "antd/es/input/Password";
import { LoginAPI, LogoutAPI } from "../config/api";
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

const LogoutService = async () => {
    try {
        const res = await LogoutAPI();
        // Clear localStorage token regardless of API response
        localStorage.removeItem("access_token");
        return res;
    } catch (error) {
        // Still clear localStorage token on error
        localStorage.removeItem("access_token");
        throw error;
    }
}

export { LoginService, LogoutService }

