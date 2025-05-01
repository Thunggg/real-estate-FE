export { };

declare global {
    interface IBackendRes<T> {
        error?: string | string[];
        message: string;
        status_code: number | string;
        data?: T;
        access_token?: string;
        refresh_token?: string;
    }

    interface ILogin {
        access_token: string,
        token_type: string,
        expires_in: number
        user?: IUser,
    }

    interface IUser {
        id: number,
        name: string,
        email?: string,
        image?: string,
        phone?: string,
        role: number,
        address: string
    }
}