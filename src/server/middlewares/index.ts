import { RequestHandler } from 'express';
import cookieParserMiddleware from 'cookie-parser';
import csrfMiddleware from 'csurf';

import { expressCspHeader } from '../../../lib/express-csp-header';

import loggerMiddleware from './logger';
import renderMiddleware from './render';
import notFound from './404';
import serverError from './500';

const cookieParser: RequestHandler = cookieParserMiddleware();

const render: RequestHandler | RequestHandler[] = renderMiddleware;

const logger: RequestHandler = loggerMiddleware();

const cspHeader: RequestHandler = expressCspHeader();
const csrfProtection: RequestHandler = csrfMiddleware({ cookie: true });

export {
    cookieParser,
    render,
    logger,
    notFound,
    serverError,
    cspHeader,
    csrfProtection
};
