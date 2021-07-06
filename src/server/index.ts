import express from 'express';

import { logger } from './middlewares';
import router from './router';
import { sequelize } from './db/models/database';
import {} from './db/created';
import hotMiddleware from './middlewares/hot';

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Успешное подключение к базе данных.');

        await sequelize.sync();
    } catch (err) {
        console.error('Не удается подключиться к базе данных:', err);
    }
})();

const server = express()
    .disable('x-powered-by')
    .use(hotMiddleware)
    .use(logger)
    .use(router);

export { server };
