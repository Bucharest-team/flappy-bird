import { NotFoundPage } from '@components/404';
import { Dispatch } from 'react';
import { match } from 'react-router';
import { Action } from '@reduxjs/toolkit';
import { getProfileInfo } from '@slices/profile';

import { Game } from './pages/game';
import { Login, Register } from './pages/auth';
import { Profile } from './pages/profile';
import { ProfileEdit } from './pages/profile/profile-edit';
import { Leaderboard } from './pages/leaderboard';
import { Main as MainPage } from './pages/main';
import { Topics } from './pages/topics';
import { TopicsItem } from './pages/topics/topics-item';
import { CreateTopic } from './pages/topics/create-topic/create-topic';

export type RouterFetchDataArgs = {
    dispatch: Dispatch<Action>;
    match: match<{ slug: string }>;
};

export default [
    {
        key: '/',
        path: '/',
        component: MainPage,
        exact: true
    },
    {
        key: 'game',
        path: '/game',
        component: Game,
        exact: true
    },
    {
        key: 'login',
        path: '/login',
        component: Login,
        exact: true,
    },
    {
        key: 'register',
        path: '/register',
        component: Register,
        exact: true,
    },
    {
        key: 'profile',
        path: '/profile',
        component: Profile,
        exact: true,
        async fetchData({ dispatch }: any) {
            await dispatch(getProfileInfo());
        }
    },
    {
        key: 'profile-edit',
        path: '/profile-edit',
        component: ProfileEdit,
        exact: true,
    },
    {
        key: 'leaderboard',
        path: '/leaderboard',
        component: Leaderboard,
        exact: true
    },
    {
        key: 'forum',
        path: '/forum',
        component: Topics,
        exact: true
    },
    {
        key: 'forum-item',
        path: '/forum/:id',
        component: TopicsItem,
        exact: true
    },
    {
        key: 'create-topic',
        path: '/create-topic',
        component: CreateTopic,
        exact: true
    },
    {
        key: '*',
        path: '*',
        component: NotFoundPage,
        exact: true
    }
];
