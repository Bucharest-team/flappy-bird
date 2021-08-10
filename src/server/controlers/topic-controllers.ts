import { Request, Response, NextFunction } from 'express';
import { Topic } from '../db/models/topic';
import { Likes } from '../db/models/likes';
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
                author,
                rating: 0,
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
            include: [Comment, Likes]
        });
        // const likes = await Topic.findAll({
        //     where: { topicId: id }
        // })
        return res.send({ topic });
    }

    static async updateRating(req: Request, res: Response) {
        const { id } = req.params;
        const { digit } = req.body;

        const topic = await Topic.update({ rating: digit }, { where: { id } });

        return res.send(topic);
    }
}
