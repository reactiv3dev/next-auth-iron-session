import { SessionOptions } from "iron-session";

export interface SessionData {
    userId?: string;
    username?: string;
    img?: string;
    isPremium?: boolean;
    isLoggedIn: boolean;
};

export const defaultSession: SessionData = {
    isLoggedIn: false,
};

export const sessionOption: SessionOptions = {
    password: process.env.SECRET_KEY!,
    cookieName: "iron-session",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production' ? true : false
    }
}