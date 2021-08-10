import { DataTypes } from 'sequelize';
import { sequelize } from './database';

export const Likes = sequelize.define('likes', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER }
});
