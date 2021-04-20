const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { SOURCE_DIRECTORY, BUILD_DIRECTORY } = require('../constants')

module.exports = {
    entry: SOURCE_DIRECTORY,
    output: {
        path: BUILD_DIRECTORY,
        publicPath: '/',
        hashDigestLength: 5
    },
    mode: 'none',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name]-[hash:5].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[hash:5].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './static/index.html',
            title: '🚀',
            minify: false
        })
    ]
}
