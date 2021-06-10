import { NextFunction, Request, Response } from 'express';
import axios from '../../__data__/axios';

const AUTH_USER = 'auth/user';
const SUCCESS = 200;

export default function isAuth() {
    return async (req: Request, _res: Response, next: NextFunction) => {
        try {
            const authData = {
                authCookie: req.cookies.authCookie,
                uuid: req.cookies.uuid
            };

            const cookies = Object
                .entries(authData)
                .map(([key, value]) => `${key}=${value}`)
                .join(';');

            const response = await axios({
                url: AUTH_USER,
                headers: { Cookie: cookies }
            });

            if (response.status === SUCCESS) {
                req.isAuthorized = true;
            } else {
                throw new Error(response.statusText);
            }
        } catch (e) {
            req.isAuthorized = false;
        }

        next();
    };
}
