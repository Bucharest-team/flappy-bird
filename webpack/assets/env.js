const env = process.env.NODE_ENV || 'development';

const ENVS = {
    __DEV__: env === 'development',
    __PROD__: env === 'production',
    __TEST__: env === 'testing',
};

const GLOBAL_ARGS = {
    ...ENVS,
    'process.env': {
        ...ENVS,
        NODE_ENV: JSON.stringify(env),
        PORT: process.env.PORT || 4007,
    },
};

module.exports = {
    env,
    ENVS,
    GLOBAL_ARGS
};
