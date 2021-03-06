import { NextFunction, Request, Response } from 'express';
// import morgan from 'morgan';

export default function logger() {
    return (req: Request, _res: Response, next: NextFunction) => {
        req.logger = () => {
            console.log(req);
        };
        next();
    };
}
