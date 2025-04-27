import { message } from "antd";
import { createContext, useContext } from "react";


interface IMessageContext {
    messageApi: ReturnType<typeof message.useMessage>[0];
    contextHolder: ReturnType<typeof message.useMessage>[1];
}

const CurrentMessageContext = createContext<IMessageContext | null>(null);

type TProps = {
    children: React.ReactNode;
};

export const MessageProvider = (props: TProps) => {
    const [messageApi, contextHolder] = message.useMessage();

    return (
        <CurrentMessageContext.Provider value={{ messageApi, contextHolder }}>
            {contextHolder}
            {props.children}
        </CurrentMessageContext.Provider>
    );
};

export const useMessageContext = () => {
    const ctx = useContext(CurrentMessageContext);

    if (!ctx) {
        throw new Error("useMessageContext must be used within a MessageProvider");
    }

    return ctx;
};
