import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('flappy-db', 'postgres', 'newPassword', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
});

// export const sequelize = new Sequelize({
//     host: 'localhost',
//     port: 5432,
//     username: 'postgres',
//     password: 'newPassword',
//     database: 'flappy-db',
//     dialect: 'postgres',
//     models: [Topic, Comment, User, Theme]
// });
