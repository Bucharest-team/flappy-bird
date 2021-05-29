import express from 'express';

import { logger } from './middlewares';
import router from './router';

const app = express();

app
    .disable('x-powered-by')
    .use(logger)
    .use(router);

export { app };
