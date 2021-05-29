const { join } = require('path');

const ROOT_DIR = join(__dirname, '../../');

const DIST_DIR = join(ROOT_DIR, 'build');
const SERVER_DIR = join(ROOT_DIR, 'src', 'server');
const CLIENT_DIR = join(ROOT_DIR, 'src', 'client');

module.exports = {
    ROOT_DIR,
    DIST_DIR,
    SERVER_DIR,
    CLIENT_DIR
};
