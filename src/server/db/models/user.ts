import { Column, AllowNull, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
    @AllowNull(false)
    @Column(DataType.STRING)
    userId!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    currentTheme!: string;
}
