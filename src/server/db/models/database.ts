import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('flappy-db', 'postgres', 'newPassword', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
});
