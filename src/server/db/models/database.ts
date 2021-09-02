import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('flappy-db', 'postgres', 'newPassword', {
    host: 'postgres',
    port: 5432,
    dialect: 'postgres'
});
