/* eslint-disable no-unused-vars */

export enum Navigation {
    Main = '/',
    Login = '/login',
    Register = '/register',
    Profile = '/profile',
    ProfileEdit = '/profile-edit',
    Game = '/game',
    Leaderboard = '/leaderboard',
    Forum = '/forum'
}

export const BASE_URL = 'https://ya-praktikum.tech';
export const BASE_API_URL = `${BASE_URL}/api/v2`;
export const BASE_RESOURCE_URL = `${BASE_API_URL}/resources`;

export const REDIRECT_URI = 'https://bucharest-flappy-bird-5.ya-praktikum.tech';
export const BACK_URL = `${REDIRECT_URI}/api`;
