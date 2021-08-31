import { DataTypes } from 'sequelize';
import { sequelize } from './database';

export const Topic = sequelize.define('topic', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    rating: { type: DataTypes.INTEGER },
    author: { type: DataTypes.STRING },
});
