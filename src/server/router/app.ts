import { ErrorRequestHandler, RequestHandler, Router } from 'express';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

import { render, cookieParser, csrfProtection, isAuth } from '../middlewares';
import { ROUTES } from '../../client/routes';

const config = require('../../../webpack/config/client.config');

const allRoutes = (function flatRoutes(routesMap: object): string[] {
    return Object.values(routesMap).reduce<string[]>(
        (routes, path) => routes.concat(typeof path === 'object' ? flatRoutes(path) : path),
        []
    );
}(ROUTES));

const middlewares: Array<RequestHandler | ErrorRequestHandler> = [
    cookieParser,
    csrfProtection,
    isAuth,
];

function getDefaultMiddleware() {
    if (process.env.NODE_ENV === 'development') {
        const compiler = webpack(config);

        return [
            devMiddleware(compiler, {
                publicPath: config.output!.publicPath!
            }),
            hotMiddleware(compiler, {
                path: '/__webpack_hmr'
            })
        ];
    }

    return [];
}

export function appRoutes(router: Router) {
    router.get(allRoutes, [...getDefaultMiddleware(), ...middlewares], render);
}
