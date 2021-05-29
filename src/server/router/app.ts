import { ErrorRequestHandler, RequestHandler, Router } from 'express';

import { render, cookieParser, csrfProtection } from '../middlewares';
import { ROUTES } from '../../client/routes';

const allRoutes = (function flatRoutes(routesMap: object): string[] {
    return Object.values(routesMap).reduce<string[]>(
        (routes, path) =>
            routes.concat(typeof path === 'object' ? flatRoutes(path) : path),
        []
    );
}(ROUTES));

const middleware: Array<RequestHandler | ErrorRequestHandler> = [
    cookieParser,
    csrfProtection
];

export function appRoutes(router: Router) {
    router.get(allRoutes, middleware, render);
}
