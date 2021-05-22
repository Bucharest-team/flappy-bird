module.exports = {
    setupFiles: ['<rootDir>/setup-tests.ts'],
    moduleNameMapper: {
        '^@slices(.*)$': '<rootDir>/src/__data__/slices$1'
    }
};
