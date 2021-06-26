import { Column, AllowNull, DataType, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';

import { Topic } from './topic';

@Table
export class Comment extends Model<Comment> {
    @AllowNull(false)
    @Column(DataType.STRING)
    author!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    text!: string;

    @Column(DataType.INTEGER)
    rating!: number;

    @Column(DataType.STRING)
    reply?: string;

    @ForeignKey(() => Topic)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    topicId!: number;

    @BelongsTo(() => Topic)
    topic?: Topic;
}
