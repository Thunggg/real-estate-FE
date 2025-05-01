import { useCurrentApp } from "../context/app.context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FetchUserAPI } from "../config/api";

interface IProps {
    children: React.ReactNode
}

const LoginMiddleWare = (props: IProps) => {
    const { isAuthenticated, user } = useCurrentApp();
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthenticate = async () => {
            if (!isAuthenticated || user === null) {
                const res = await FetchUserAPI();
                if (res && res.status_code === 200) {
                    navigate("/");
                } else {
                    navigate("/login");
                }
            } else {
                navigate("/");
            }
        }
        checkAuthenticate();
    }, []);

    return (
        <>
            {props.children}
        </>
    )


}

export default LoginMiddleWare;