const env = process.env.NODE_ENV || 'development';

const ENVS = {
    __DEV__: env === 'development',
    __PROD__: env === 'production',
    __TEST__: env === 'testing',
};

module.exports = {
    env,
    ENVS,
};
