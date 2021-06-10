import express from 'express';

import { logger } from './middlewares';
import router from './router';
import { startApp } from './utils/start-app';

const server = express()
    .disable('x-powered-by')
    .use(logger)
    .use(router);

startApp(({ server }));
