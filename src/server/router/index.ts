import { Router } from 'express';
import { staticRoutes } from './static';
import { appRoutes } from './app';
import { apiRouters } from './api';

const router: Router = Router();

apiRouters(router);
staticRoutes(router);
appRoutes(router);

export default router;
