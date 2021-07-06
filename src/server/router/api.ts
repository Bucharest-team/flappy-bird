import { Router } from 'express';
import { CommentController } from '../controlers/comment-controllers';
import { TopicController } from '../controlers/topic-controllers';
import { UserController } from '../controlers/user-controllers';

const topic: Router = Router();
const comment: Router = Router();
const user: Router = Router();

export const apiRouters = (router: Router) => {
    router.use('/api/topic', topic);
    router.use('/api/comment', comment);
};

topic.get('/', TopicController.getAll);
topic.get('/:id', TopicController.getOne);
topic.post('/', TopicController.create);
topic.put('/:id', TopicController.updateRating);

comment.get('/', CommentController.getAll);
comment.post('/', CommentController.create);
comment.put('/:id', CommentController.updateRating);

user.post('/', UserController.create);
user.post('/:id', UserController.changeTheme);
