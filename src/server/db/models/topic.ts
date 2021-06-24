import { AllowNull, Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Topic extends Model<Topic> {
    @AllowNull(false)
    @Column(DataType.STRING)
    title!: string;

    @Column(DataType.STRING)
    description!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    author!: string;
}
