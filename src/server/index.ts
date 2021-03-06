import express from 'express';

import bodyParser from 'body-parser';
import { logger } from './middlewares';
import router from './router';
import { sequelize } from './db/models/database';
import {} from './db/created';

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
    .use(bodyParser.json())
    .use(logger)
    .use(router);

export { server };
