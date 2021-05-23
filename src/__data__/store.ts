import { configureStore } from '@reduxjs/toolkit';

import user from './slices/user';
import profile from './slices/profile';
import game from './slices/game';

export const store = configureStore({
    reducer: {
        user,
        profile,
        game
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Store = typeof store;
