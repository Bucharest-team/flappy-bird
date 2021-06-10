import { NextFunction, Request, Response } from 'express';

const HTTPCode = {
    NotFountError: 404
};

export default function NotFound() {
    return (req: Request, res: Response, next: NextFunction) => {
        req.render404 = () => {
            res.status(HTTPCode.NotFountError); // 500
            res.send('Sorry cant find that!');
        };
        next();
    };
}
