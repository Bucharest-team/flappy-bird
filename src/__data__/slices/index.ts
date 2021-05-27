import { History } from 'history';
import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import user from './user';
import profile from './profile';
import game from './game';

export const createRootReducer = (history: History) => combineReducers({
    user,
    profile,
    game,
    router: connectRouter(history)
});
