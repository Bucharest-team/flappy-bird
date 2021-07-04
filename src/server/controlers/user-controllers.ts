import { Request, Response } from 'express';
import { User } from '../db/models/user';

export class UserController {
    static async create(req: Request, res: Response) {
        const { userId } = req.body;

        const result = await User.create({
            userId,
            currentTheme: 'light'
        });

        res.send(result);
    }

    static async changeTheme(req: Request, res: Response) {
        const { userId, theme } = req.body;

        const result = await User.update({ currentTheme: theme }, { where: { userId } });
        res.send(result);
    }
}
