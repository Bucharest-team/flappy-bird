import { DataTypes } from 'sequelize';
import { sequelize } from './database';

export const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    theme: { type: DataTypes.STRING }
});
