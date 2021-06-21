const { resolve } = require('path');
const appRoot = require('app-root-path');

const DIST_DIR = resolve(appRoot.path, 'build');
const SERVER_DIR = resolve(appRoot.path, 'src', 'server');
const CLIENT_DIR = resolve(appRoot.path, 'src', 'client');

module.exports = {
    DIST_DIR,
    SERVER_DIR,
    CLIENT_DIR
};
