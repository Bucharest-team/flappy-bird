const fileRegex = /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf)$/;

module.exports = {
    client: {
        test: fileRegex,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: 'static/[name]-[hash:5].[ext]'
                }
            }
        ]
    },
    server: {
        test: fileRegex,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: 'static/[name]-[hash:5].[ext]'
                }
            }
        ]
    }
};
