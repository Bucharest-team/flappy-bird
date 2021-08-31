import { DataTypes } from 'sequelize';
import { sequelize } from './database';

export const Comment = sequelize.define('comment', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.STRING },
    rating: { type: DataTypes.INTEGER },
    author: { type: DataTypes.STRING }
});
