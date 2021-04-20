const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

const commonConfig = require('./webpack.common')

module.exports = merge(
    commonConfig,
    {
        output: {
            filename: 'js/[name].[contenthash].[id].js'
        },
        mode: 'production',
        devtool: false,
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()],
            splitChunks: {
                chunks: 'all'
            },
            runtimeChunk: {
                name: 'runtime'
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
    }
)
