module.exports = (api) => {
    const env = api.env();

    api.cache.using(() => env === 'development');

    return {
        presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript'
        ],
        plugins: [
            '@emotion',
            '@babel/plugin-syntax-dynamic-import',
            ['@babel/plugin-proposal-decorators', { 'legacy': true }],
            '@babel/plugin-proposal-class-properties'
        ]
    };
};
