const path = require('path')

module.exports = {
    IS_DEV: process.env.NODE_ENV === 'development',
    SOURCE_DIRECTORY: path.resolve(__dirname, '../src'),
    BUILD_DIRECTORY: path.resolve(__dirname, '../build')
}
