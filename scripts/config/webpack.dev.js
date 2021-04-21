const { merge } = require('webpack-merge')

const { BUILD_DIRECTORY } = require('../constants')

const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
    output: {
        filename: 'index.js'
    },
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: BUILD_DIRECTORY,
        open: false,
        compress: true,
        hot: true,
        overlay: true,
        stats: { colors: true },
        port: 8080,
        quiet: false,
        historyApiFallback: true
    },
    target: 'web'
})
