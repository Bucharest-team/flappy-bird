import { History } from 'history';
import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import auth from './auth';
import profile from './profile';
import game from './game';
import leaderboard from './leaderboard';
import topics from './topics';

export const createRootReducer = (history: History) =>
    combineReducers({
        auth,
        profile,
        game,
        leaderboard,
        topics,
        router: connectRouter(history)
    });
