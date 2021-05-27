const { join } = require('path');
const nodeExternals = require('webpack-node-externals');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { IS_DEV, BUILD_DIRECTORY, SOURCE_DIRECTORY } = require('../constants');
const jsLoader = require('../loaders/js');
const assetsLoader = require('../loaders/assets');

module.exports = {
    target: 'node',
    node: { __dirname: false },
    entry: join(SOURCE_DIRECTORY, 'server'),
    mode: IS_DEV ? 'development' : 'production',
    module: {
        rules: [jsLoader.server, assetsLoader.server]
    },
    output: {
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        path: BUILD_DIRECTORY,
        publicPath: '/'
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
    },
    externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],
    devtool: 'source-map',
    plugins: [
        !IS_DEV && new CopyWebpackPlugin({
            patterns: [
                { from: './www/favicons', to: 'favicons' },
                { from: './www/robots.txt', to: '' }
            ]
        })
    ].filter(Boolean)
};
