import { LoginAPI } from "../config/api";

type PayloadLogin = {
    email?: string;
    password?: string;
};

const LoginService = (payload: PayloadLogin) => {
    try {
        const res = LoginAPI();
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

export { LoginService }

