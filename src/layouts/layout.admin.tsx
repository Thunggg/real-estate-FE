import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {

    useEffect(() => {
        console.log("123");
    }, [])

    return (
        <>
            <Outlet />
        </>
    )
}

export default LayoutAdmin;