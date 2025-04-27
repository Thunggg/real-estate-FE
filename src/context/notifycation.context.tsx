import { notification } from "antd";
import { createContext, useContext } from "react";

type TProps = {
    children: React.ReactNode;
};

interface INotifyContext {
    notificationApi: ReturnType<typeof notification.useNotification>[0],
    contextHolder: ReturnType<typeof notification.useNotification>[1],
}

const CurrentNotifyContext = createContext<INotifyContext | null>(null);

export const NotifyProvider = (props: TProps) => {
    const [notificationApi, contextHolder] = notification.useNotification();

    return (
        <CurrentNotifyContext.Provider value={{ notificationApi, contextHolder }}>
            {contextHolder}
            {props.children}
        </CurrentNotifyContext.Provider>
    );
};

export const useCurrentNotify = () => {
    const currentNotifyContext = useContext(CurrentNotifyContext);

    if (!currentNotifyContext) {
        throw new Error(
            "currentNotifyContext has to be used within <currentNotifyContext.Provider>"
        );
    }

    return currentNotifyContext;
};