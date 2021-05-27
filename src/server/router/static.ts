import { resolve } from 'path';
import { Router, static as staticRoute } from 'express';

export const staticRoutes = (router: Router) => {
    router
        .use('/', staticRoute(resolve(__dirname, '../build')))
        .use('/static', staticRoute(resolve(__dirname, 'static')))
        .use('/fonts', staticRoute(resolve(__dirname, 'fonts')))
        .use('/favicons', staticRoute(resolve(__dirname, 'favicons')))
        .use('/robots.txt', staticRoute(resolve(__dirname, 'robots.txt')));
};
