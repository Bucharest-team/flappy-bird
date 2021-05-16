import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AUTH_LOGOUT_FETCH, AUTH_SIGNIN, AUTH_SIGNUP } from '../action-types';
import { UserApi } from '../../api/user-api';
import axios from '../axios';

type SliceState = {
    userID: number | null;
    isLogin: boolean;
};

export type Registration = {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    passwordTwo?: string;
    phone: string;
};

export type Login = {
    login: string;
    password: string;
};

const initialState: SliceState = { userID: null, isLogin: false };

const LOGOUT_URL = '/auth/logout';
const LOGIN_URL = '/auth/signin';
const REGISTER_URL = '/auth/signup';

export const logout = createAsyncThunk(AUTH_LOGOUT_FETCH, async () => {
    const { data } = await axios.post(LOGOUT_URL);
    return data;
});

export const auth = createAsyncThunk(AUTH_SIGNIN, async (payload: Login) => {
    const { data } = await axios.post(LOGIN_URL, payload);
    return data;
});

export const register = createAsyncThunk(AUTH_SIGNUP, async (payload: Login) => {
    const { data } = await axios.post(REGISTER_URL, payload);
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
        builder.addCase(auth.fulfilled, (state) => {
            localStorage.setItem('login', 'true');
            state.isLogin = true;
        });
        builder.addCase(auth.rejected, () => {
            alert('Неверный логин или пароль!');
        });
        builder.addCase(register.fulfilled, (state) => {
            localStorage.setItem('login', 'true');
            state.isLogin = true;
        });
        builder.addCase(register.rejected, () => {
            alert('Произошла ошибка!');
        });
    }
});
export const { setUser, setLogin } = user.actions;

export const checkLogin = () => (dispatch: any) => {
    dispatch(setLogin(Boolean(localStorage.getItem('login'))));
};

export default user.reducer;
