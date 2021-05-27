export const ROUTES = {
    INDEX_REDIRECT: {
        INDEX: '/'
    },
    PROFILE: {
        INDEX: '/profile',
        USER: {
            INDEX: '/hello/user',
            ID: '/hello/user/:id'
        }
    },
    LOGIN: {
        INDEX: '/login'
    },
    REGISTER: {
        INDEX: '/register'
    },
    GAME: {
        INDEX: '/game'
    },
    FORUM: {
        INDEX: '/forum'
    },
    NOT_FOUND: {
        INDEX: '*'
    }
};
