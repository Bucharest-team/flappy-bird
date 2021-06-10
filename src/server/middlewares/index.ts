import { RequestHandler } from 'express';
import cookieParserMiddleware from 'cookie-parser';
import csrfMiddleware from 'csurf';

import { expressCspHeader } from '../../../lib/express-csp-header';

import loggerMiddleware from './logger';
import renderMiddleware from './render';
import notFoundMiddleware from './404';
import serverErrorMiddleware from './500';
import isAuthMiddleware from './is-auth';

const cookieParser: RequestHandler = cookieParserMiddleware();

const render: RequestHandler | RequestHandler[] = renderMiddleware;

const logger: RequestHandler = loggerMiddleware();

const notFound = notFoundMiddleware();
const serverError = serverErrorMiddleware();

const isAuth = isAuthMiddleware();

const cspHeader: RequestHandler = expressCspHeader();
const csrfProtection: RequestHandler = csrfMiddleware({ cookie: true });

export {
    cookieParser,
    render,
    logger,
    notFound,
    serverError,
    cspHeader,
    csrfProtection,
    isAuth
};
