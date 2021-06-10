declare namespace Express {
    interface Request {
        isAuthorized: boolean;
        render404: () => void
        render500: () => void
    }
}
