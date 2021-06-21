import express from 'express';

import { logger } from './middlewares';
import router from './router';

const server = express()
    .disable('x-powered-by')
    .use(logger)
    .use(router);

export { server };
