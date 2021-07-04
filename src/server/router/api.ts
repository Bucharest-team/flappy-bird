import { Router } from 'express';
import { CommentController } from '../controlers/comment-controllers';
import { TopicController } from '../controlers/topic-conrollers';

const topic: Router = Router();
const comment: Router = Router();

export const apiRouters = (router: Router) => {
    router.use('/api/topic', topic);
    router.use('/api/comment', comment);
};

topic.get('/', TopicController.getAll);
topic.get('/:id', TopicController.getOne);
topic.post('/', TopicController.create);

comment.get('/', CommentController.getAll);
comment.post('/', CommentController.create);
