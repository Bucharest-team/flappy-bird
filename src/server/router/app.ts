import { Router } from 'express';

import renderApp from '../middleware/render';
import { ROUTES } from '../../client/routes';

const allRoutes = (function flatRoutes(routesMap: object): string[] {
    return Object.values(routesMap).reduce<string[]>(
        (routes, path) =>
            routes.concat(typeof path === 'object' ? flatRoutes(path) : path),
        []
    );
}(ROUTES));

export function appRoutes(router: Router) {
    router.get(allRoutes, renderApp);
}
