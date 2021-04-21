const { merge } = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
    output: {
        filename: '[name].[contenthash].js'
    },
    mode: 'production',
    devtool: false,
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all',
            name: 'chunk'
        },
        runtimeChunk: {
            name: (entrypoint) => `runtime~${entrypoint.name}`
        }
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../../static/assets'),
                    to: path.resolve(__dirname, '../../build/assets')
                }
            ]
        })
    ]
})
