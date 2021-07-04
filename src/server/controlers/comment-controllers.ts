import { Request, Response, NextFunction } from 'express';
import { Comment } from '../db/models/comment';

export class CommentController {
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { author, text, topicId, replayId } = req.body;
            const comment = await Comment.create({
                text,
                author,
                topicId,
                replayId,
                rating: 0
            });
            res.send(comment);
        } catch (err) {
            next(res.send());
        }
    }

    static async getAll(_: Request, res: Response) {
        const comments = await Comment.findAll();
        return res.send(comments);
    }

    static async updateRating(req: Request, res: Response) {
        const { id, digit } = req.body;

        const comment = await Comment.update(
            { rating: digit },
            {
                where: { id }
            }
        );

        return res.send(comment);
    }
}
