import { Outlet } from "react-router-dom";
import { useCurrentApp } from "../context/app.context";
import { useEffect } from "react";
import { FetchUserAPI } from "../config/api";

const LayoutClient = () => {
    const { user, setUser, setIsAuthenticated } = useCurrentApp();

    useEffect(() => {
        const fetchUser = async () => {
            const res = await FetchUserAPI();
            if (res && res.data && res.status_code === 200) {
                setUser(res.data);
                setIsAuthenticated(true);
            }
        }
        fetchUser();
    }, [])

    return (
        <>
            <div>Đây là layout client: {user?.name}</div>
            <Outlet />
        </>
    )
}

export default LayoutClient;