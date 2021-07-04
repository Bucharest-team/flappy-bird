import { DataTypes } from 'sequelize';
import { sequelize } from './database';

export const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER },
    currentTheme: { type: DataTypes.STRING }
});
