import { Sequelize } from 'sequelize-typescript';

import { Topic } from './topic';
import { Comment } from './comment';
import { User } from './user';
import { Theme } from './theme';

export const sequelize = new Sequelize({
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'newPassword',
    database: 'flappy-db',
    dialect: 'postgres',
    models: [Topic, Comment, User, Theme]
});
