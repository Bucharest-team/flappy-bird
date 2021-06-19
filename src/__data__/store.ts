import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware, RouterState } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';

import { isServer } from '@utils/is-server';

import { RootState } from './types';
import { createRootReducer } from './slices';
import { initialState as AuthState } from './slices/auth';
import { initialState as ProfileState } from './slices/profile';
import { initialState as GameState } from './slices/game';

export const createReduxStore = (initialState = {}, url = '/') => {
    const preloadedState = !isServer ? window.__PRELOADED_STATE__ : initialState;

    if (!isServer) {
        delete window.__PRELOADED_STATE__;
    }

    const history = isServer
        ? createMemoryHistory({ initialEntries: [url] })
        : createBrowserHistory();
    const middleware = [...getDefaultMiddleware(), routerMiddleware(history)];

    const store = configureStore({
        reducer: createRootReducer(history),
        preloadedState,
        middleware,
        devTools: !isServer
    });

    return { store, history };
};

export default createReduxStore();

export const getInitialState = (pathname: string = '/'): RootState => {
    return {
        auth: AuthState,
        profile: ProfileState,
        game: GameState,
        router: {
            location: { pathname, search: '', hash: '', key: '' },
            action: 'POP'
        } as unknown as RouterState,
    };
};
