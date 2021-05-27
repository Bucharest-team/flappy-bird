const { join } = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const { IS_DEV, BUILD_DIRECTORY, SOURCE_DIRECTORY } = require('../constants');
const jsLoader = require('../loaders/js');
const assetsLoader = require('../loaders/assets');

module.exports = {
    entry: join(SOURCE_DIRECTORY, 'client'),
    module: {
        rules: [jsLoader.client, assetsLoader.client]
    },
    output: {
        path: BUILD_DIRECTORY,
        filename: '[name].js',
        publicPath: '/'
    },
    mode: IS_DEV ? 'development' : 'production',
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
    },
    devtool: IS_DEV ? 'eval-cheap-module-source-map' : false,
    performance: {
        hints: IS_DEV ? false : 'warning'
    }
};
