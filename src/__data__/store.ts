import { configureStore } from '@reduxjs/toolkit';

import user from './slices/user';
import profile from './slices/profile';

export const store = configureStore({
    reducer: {
        user,
        profile
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
