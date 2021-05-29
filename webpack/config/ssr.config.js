const nodeExternals = require('webpack-node-externals');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { ENVS } = require('../assets/env');
const { DIST_DIR, SERVER_DIR } = require('../assets/dir');
const jsLoader = require('../loaders/js');
const assetsLoader = require('../loaders/assets');

const { __DEV__ } = ENVS;

module.exports = {
    target: 'node',
    node: { __dirname: false },
    entry: SERVER_DIR,
    mode: __DEV__ ? 'development' : 'production',
    module: {
        rules: [jsLoader.server, assetsLoader.server]
    },
    output: {
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        path: DIST_DIR,
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
        new CopyWebpackPlugin({
            patterns: [
                { from: './www/favicons', to: 'favicons' },
                { from: './www/robots.txt', to: '' }
            ]
        })
    ]
};
