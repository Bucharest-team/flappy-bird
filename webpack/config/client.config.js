const { join } = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const webpack = require('webpack');

const { ENVS } = require('../assets/env');
const { DIST_DIR, CLIENT_DIR, ROOT_DIR } = require('../assets/dir');
const jsLoader = require('../loaders/js');
const assetsLoader = require('../loaders/assets');

const { __DEV__, __PROD__ } = ENVS;

module.exports = {
    entry: CLIENT_DIR,
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
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
    },
    devtool: __DEV__ ? 'eval-cheap-module-source-map' : false,
    performance: {
        hints: __DEV__ ? false : 'warning'
    },
    plugins: [
        // закоментировано до исправления разделения вендоров
        // new webpack.DllReferencePlugin({
        //     context: ROOT_DIR,
        //     manifest: join(DIST_DIR, 'webpack', 'vendors-manifest.json')
        // }),
        __PROD__ && new webpack.ProgressPlugin(),
        __PROD__ && new DuplicatePackageCheckerPlugin()
    ].filter(Boolean)
};
