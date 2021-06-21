import { resolve } from 'path';
import { Router, static as staticRoute } from 'express';
import appRoot from 'app-root-path';

export const staticRoutes = (router: Router) => {
    router
        .use('/', staticRoute(resolve(appRoot.path, 'build')))
        .use('/static', staticRoute(resolve(appRoot.path, 'static')))
        .use('/fonts', staticRoute(resolve(appRoot.path, 'fonts')))
        .use('/favicons', staticRoute(resolve(appRoot.path, 'favicons')))
        .use('/robots.txt', staticRoute(resolve(appRoot.path, 'robots.txt')));
};
