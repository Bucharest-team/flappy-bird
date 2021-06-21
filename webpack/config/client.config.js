const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const webpack = require('webpack');

const { ENVS } = require('../assets/env');
const { DIST_DIR, CLIENT_DIR } = require('../assets/dir');
const jsLoader = require('../loaders/js');
const assetsLoader = require('../loaders/assets');

const { __DEV__, __PROD__ } = ENVS;

module.exports = {
    target: 'web',
    entry: [
        __DEV__ && 'react-hot-loader/patch',
        // Entry для работы HMR
        __DEV__ && 'webpack-hot-middleware/client',
        CLIENT_DIR
    ].filter(Boolean),
    module: {
        rules: [jsLoader.client, assetsLoader.client]
    },
    output: {
        path: DIST_DIR,
        filename: '[name].js',
        publicPath: '/'
    },
    mode: __DEV__ ? 'development' : 'production',
    resolve: {
        modules: ['src', 'node_modules'],
        alias: { 'react-dom': '@hot-loader/react-dom' },
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
    },
    devtool: __DEV__ ? 'eval-cheap-module-source-map' : false,
    performance: {
        hints: __DEV__ ? false : 'warning'
    },
    devServer: {
        hot: true
    },
    plugins: [
        __PROD__ && new webpack.ProgressPlugin(),
        __PROD__ && new DuplicatePackageCheckerPlugin(),
        __DEV__ && new webpack.HotModuleReplacementPlugin()
    ].filter(Boolean)
};
