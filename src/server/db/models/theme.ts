import { Column, AllowNull, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Theme extends Model<Theme> {
    @AllowNull(false)
    @Column(DataType.STRING)
    light!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    dark!: string;
}
