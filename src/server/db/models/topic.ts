import { AllowNull, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';

import { Comment } from './comment';

@Table
export class Topic extends Model<Topic> {
    @AllowNull(false)
    @Column(DataType.STRING)
    title!: string;

    @Column(DataType.STRING)
    description?: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    author!: string;

    @HasMany(() => Comment)
    comments?: Comment[];
}
