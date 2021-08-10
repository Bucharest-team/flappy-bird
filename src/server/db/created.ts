import { Topic } from './models/topic';
import { Comment } from './models/comment';
import { Likes } from './models/likes';

Topic.hasMany(Comment);
Comment.belongsTo(Topic);

Topic.hasMany(Likes);
Likes.belongsTo(Topic);

Comment.hasOne(Comment);
Comment.belongsTo(Comment, { foreignKey: 'replayId' });
