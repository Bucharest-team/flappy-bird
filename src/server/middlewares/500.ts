import { NextFunction, Request, Response } from 'express';

const HTTPCode = {
    InternalServerError: 500
};

// TODO: разобраться с 404 и 500 ошибками
export default function ServerError() {
    return (req: Request, res: Response, next: NextFunction) => {
        req.render500 = () => {
            res.status(HTTPCode.InternalServerError);
            res.send('Something failed!');
        };
        next();
    };
}
