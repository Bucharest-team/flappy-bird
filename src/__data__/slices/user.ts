import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../types';
import axios from '../axios';

export type SliceState = {
    userID: number | null;
    isAuthorized: boolean;
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

export const initialState: SliceState = { userID: null, isAuthorized: false };

const LOGOUT_URL = '/auth/logout';
const LOGIN_URL = '/auth/signin';
const REGISTER_URL = '/auth/signup';

export const logout = createAsyncThunk('auth/logout', async () => {
    const { data } = await axios.post(LOGOUT_URL);
    return data;
});

export const auth = createAsyncThunk('auth/signin', async (payload: Login) => {
    const { data } = await axios.post(LOGIN_URL, payload);
    return data;
});

export const register = createAsyncThunk('auth/signup', async (payload: Registration) => {
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
        setAuthorization: (state, action: PayloadAction<boolean>) => {
            state.isAuthorized = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(logout.fulfilled, (state) => {
            state.isAuthorized = false;
        });
        builder.addCase(auth.fulfilled, (state) => {
            state.isAuthorized = true;
        });
        builder.addCase(auth.rejected, () => {
            alert('Неверный логин или пароль!');
        });
        builder.addCase(register.fulfilled, (state) => {
            state.isAuthorized = true;
        });
        builder.addCase(register.rejected, () => {
            alert('Произошла ошибка!');
        });
    }
});
export const { setUser, setAuthorization } = user.actions;

export default user.reducer;

export const isAuthorized = (state: RootState) => state.user.isAuthorized;
