import { ErrorRequestHandler, RequestHandler, Router } from 'express';

import { render, cookieParser, csrfProtection, isAuth } from '../middlewares';
import { getDefaultMiddleware } from '../middlewares/hot';

const middlewares: Array<RequestHandler | ErrorRequestHandler> = [
    cookieParser,
    csrfProtection,
    isAuth,
];

export function appRoutes(router: Router) {
    router.get('*', [...getDefaultMiddleware(), ...middlewares], render);
}
