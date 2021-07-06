import { Topic } from './models/topic';
import { Comment } from './models/comment';

Topic.hasMany(Comment);
Comment.belongsTo(Topic);

Comment.hasOne(Comment);
Comment.belongsTo(Comment, { foreignKey: 'replayId' });
