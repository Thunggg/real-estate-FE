// import { fetchAccountAPI } from "@/services/api";
import { createContext, useContext, useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import { FetchUserAPI } from "../config/api";

interface IAppContext {
    isAuthenticated: boolean,
    setIsAuthenticated: (v: boolean) => void,
    setUser: (v: IUser | null) => void,
    user: IUser | null,
    isAppLoading: boolean,
    setIsAppLoading: (v: boolean) => void
}

const CurrentAppContext = createContext<IAppContext | null>(null);

type TProps = {
    children: React.ReactNode
}

export const AppProvider = (props: TProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<IUser | null>(null);
    const [isAppLoading, setIsAppLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchAccount = async () => {
            // Check if we have a token in localStorage
            const token = localStorage.getItem("access_token");
            if (!token) return;

            setIsAppLoading(true);

            try {
                const res = await FetchUserAPI();
                if (res.data?.user) {
                    // Set user information
                    setUser(res.data.user);
                    setIsAuthenticated(true);
                } else {
                    // If no user data, clear token
                    localStorage.removeItem("access_token");
                }
            } catch (error) {
                console.error("Error fetching account:", error);
                // Clear invalid token on error
                localStorage.removeItem("access_token");
            }

            // Short delay before turning off loading state
            setTimeout(() => {
                setIsAppLoading(false);
            }, 1000);
        };

        fetchAccount();
    }, []);

    return (
        <>
            {isAppLoading === false ?
                <CurrentAppContext.Provider value={{
                    isAuthenticated, user, setIsAuthenticated, setUser, isAppLoading, setIsAppLoading
                }
                }>
                    {props.children}
                </CurrentAppContext.Provider>
                :
                <div
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}>
                    <PacmanLoader
                        size={50}
                        color="#6EC2F7"
                    />
                </div>
            }
        </>
    );
};

export const useCurrentApp = () => {
    const currentAppContext = useContext(CurrentAppContext);

    if (!currentAppContext) {
        throw new Error(
            "useCurrentApp must be used within <CurrentAppContext.Provider>"
        );
    }

    return currentAppContext;
};