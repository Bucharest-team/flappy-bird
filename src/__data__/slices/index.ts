import { History } from 'history';
import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import auth from './auth';
import profile from './profile';
import game from './game';

export const createRootReducer = (history: History) => combineReducers({
    auth,
    profile,
    game,
    router: connectRouter(history)
});
