import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

const config = require('../../../webpack/config/client.config');

function getDefaultMiddleware() {
    if (process.env.NODE_ENV === 'development') {
        const compiler = webpack(config);

        return [
            // @ts-ignore
            devMiddleware(compiler, {
                publicPath: config.output!.publicPath!
            }),
            hotMiddleware(compiler, {
                path: '/__webpack_hmr'
            })
        ];
    }

    return [];
}

export default [
    ...getDefaultMiddleware()
];
