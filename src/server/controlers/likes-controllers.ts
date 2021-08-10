import { Request, Response, NextFunction } from 'express';
import { Likes } from '../db/models/likes';

export class LikesController {
    static async setLike(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId, topicId } = req.body;
            const like = await Likes.create({
                userId,
                topicId
            });
            res.send(like);
        } catch (err) {
            next(res.send());
        }
    }
}
