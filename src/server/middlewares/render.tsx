import React from 'react';
import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';
import { Request, Response } from 'express';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
import { Helmet, HelmetData } from 'react-helmet';
import { setAuthorization } from '@slices/auth';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core';

import { App } from '../../client/app';
import { renderObject } from '../utils/render-to-object';
import { createReduxStore, getInitialState } from '../../__data__/store';
import { muiTheme } from '../../client/theme/theme';

const getHtml = (reactHtml: string, muiCss: any, store: Store, helmet: HelmetData) => {
    const html = renderToStaticMarkup(
        <html lang="en">
            <head>
                {helmet.title.toComponent()}
                {helmet.meta.toComponent()}
                {helmet.link.toComponent()}
                {helmet.script.toComponent()}
                <style id="jss-server-side" dangerouslySetInnerHTML={{ __html: muiCss }} />
                <link rel="icon" type="image/png" href="/favicons/favicon.png" />
            </head>
            <body>
                <div id="root" dangerouslySetInnerHTML={{ __html: reactHtml }} />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.__PRELOADED_STATE__ = ${renderObject(store.getState())}`
                    }}
                />
                <script src="/main.js" />
            </body>
        </html>
    );

    return `<!doctype html>${html}`;
};

export default (req: Request, res: Response) => {
    const location = req.url;
    const { store } = createReduxStore(getInitialState(location), location);
    const context: StaticRouterContext = {};

    if (context.url) {
        res.redirect(context.url);
        return;
    }

    store.dispatch(setAuthorization(req.isAuthorized));

    const jsx = (
        <Provider store={store}>
            <StaticRouter context={context} location={location}>
                <ThemeProvider theme={muiTheme}>
                    <App />
                </ThemeProvider>
            </StaticRouter>
        </Provider>
    );

    const sheets = new ServerStyleSheets();
    const reactHtml = renderToString(sheets.collect(jsx));
    const helmet = Helmet.renderStatic();

    res
        .status(context.statusCode || 200)
        .send(getHtml(reactHtml, sheets, store, helmet));
};
