const fileRegex = /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf)$/;

module.exports = {
    client: {
        test: fileRegex,
        type: 'asset/resource',
        generator: {
            filename: 'static/[name]-[hash:5][ext]'
        }
    },
    server: {
        test: fileRegex,
        type: 'asset/resource',
        generator: {
            filename: 'static/[name]-[hash:5][ext]'
        }
    }
};
