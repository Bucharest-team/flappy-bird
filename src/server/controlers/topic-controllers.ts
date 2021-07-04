import { Request, Response, NextFunction } from 'express';
import { Topic } from '../db/models/topic';
import { Comment } from '../db/models/comment';

export class TopicController {
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { author, description, title } = req.body;
            if (!author || !description || !title) {
                throw new Error('Error params');
            }

            const result = await Topic.create({
                title,
                description,
                author
            });

            res.send(result);
        } catch (e) {
            next(res.send(e));
        }
    }

    static async getAll(_: Request, res: Response) {
        const result = await Topic.findAll();

        return res.send(result);
    }

    static async getOne(req: Request, res: Response) {
        const { id } = req.params;
        const topic = await Topic.findOne({
            where: { id },
            include: Comment
        });
        return res.send(topic);
    }
}
