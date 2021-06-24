import { Column, AllowNull, DataType, Model, Table, ForeignKey } from 'sequelize-typescript';

import { Topic } from './topic';

@Table
export class Comments extends Model<Comments> {
    @ForeignKey(() => Topic)
    @AllowNull(false)
    @Column(DataType.STRING)
    topicId!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    author!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    text!: string;

    @Column(DataType.INTEGER)
    rating!: number;

    // @Column
    // reply?: string;
}
