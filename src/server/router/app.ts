import { ErrorRequestHandler, RequestHandler, Router } from 'express';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

import { render, cookieParser, csrfProtection, isAuth } from '../middlewares';

const config = require('../../../webpack/config/client.config');

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
                publicPath: config.output!.publicPath!,
                writeToDisk: true
            }),
            hotMiddleware(compiler, {
                path: '/__webpack_hmr'
            })
        ];
    }

    return [];
}

export function appRoutes(router: Router) {
    router.get('*', [...getDefaultMiddleware(), ...middlewares], render);
}
