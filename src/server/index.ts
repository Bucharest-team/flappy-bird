import express from 'express';

import router from './router';

const app = express();

app
    .disable('x-powered-by')
    .use(router);

export { app };
