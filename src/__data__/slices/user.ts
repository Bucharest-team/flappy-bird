import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AUTH_LOGOUT_FETCH } from '../action-types';
import { UserApi } from '../../api/user-api';
import axios from '../axios';

type SliceState = {
    userID: number | null;
    isLogin: boolean;
};

const initialState: SliceState = { userID: null, isLogin: false };

const LOGOUT_URL = '/auth/logout';

export const logout = createAsyncThunk(AUTH_LOGOUT_FETCH, async () => {
    const { data } = await axios.post(LOGOUT_URL);
    return data;
});

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<number>) => {
            state.userID = action.payload;
        },
        setLogin: (state, action: PayloadAction<boolean>) => {
            state.isLogin = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(logout.fulfilled, (state) => {
            localStorage.removeItem('login');
            state.isLogin = false;
        });
    }
});
export const { setUser, setLogin } = user.actions;

export const checkLogin = () => (dispatch: any) => {
    dispatch(setLogin(Boolean(localStorage.getItem('login'))));
};

export const auth = (payload: any) => async (dispatch: any) => {
    try {
        await UserApi.login(payload);
        localStorage.setItem('login', 'true');
        dispatch(setLogin(true));
    } catch (e) {
        alert('Неверный логин или пароль!');
    }
};

export const register = (payload: any) => async (dispatch: any) => {
    try {
        await UserApi.register(payload);
        localStorage.setItem('login', 'true');
        dispatch(setLogin(true));
    } catch (e) {
        alert('Неверный логин или пароль!');
    }
};

export default user.reducer;
