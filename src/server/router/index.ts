import { Router } from 'express';

import { staticRoutes } from './static';
import { appRoutes } from './app';

const router: Router = Router();

staticRoutes(router);
appRoutes(router);

export default router;
