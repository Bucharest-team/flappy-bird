const CompressionWebpackPlugin = require('compression-webpack-plugin');
const { join } = require('path');
const webpack = require('webpack');

const { STATS_OPTIONS, VENDORS } = require('../assets/config');
const { DIST_DIR } = require('../assets/dir');
const { ENVS } = require('../assets/env');

const config = {
    target: 'web',
    devtool: 'source-map',
    entry: {
        vendors: VENDORS
    },
    output: {
        library: '[name]_[fullhash]',
        filename: '[name]_[fullhash].js',
        path: join(DIST_DIR, 'client', '_')
    },
    plugins: [
        new webpack.DllPlugin({
            context: DIST_DIR,
            name: '[name]_[fullhash]',
            path: join(DIST_DIR, 'webpack', 'vendors-manifest.json')
        }),
        !ENVS.__DEV__ && new CompressionWebpackPlugin({ minRatio: 1 })
    ].filter(Boolean),
    stats: STATS_OPTIONS
};

module.exports = config;
