import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../types';
import axios from '../axios';
import { REDIRECT_URI } from '../../client/constants';

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
const O_AUTH_SERVICE_ID_URL = '/oauth/yandex/service-id';
const O_AUTH_URL = '/oauth/yandex';

export const logout = createAsyncThunk('auth/logout', async () => {
    await axios.post(LOGOUT_URL);
});

export const login = createAsyncThunk('auth/signin', async (payload: Login) => {
    await axios.post(LOGIN_URL, payload);
});

export const register = createAsyncThunk('auth/signup', async (payload: Registration) => {
    await axios.post(REGISTER_URL, payload);
});

export const oAuthServiceId = () => async () => {
    try {
        const { data } = await axios({
            url: O_AUTH_SERVICE_ID_URL,
            params: {
                redirect_uri: REDIRECT_URI
            }
        });

        window.location.href =
            `https://oauth.yandex.ru/authorize?response_type=code&client_id=${data.service_id}&redirect_uri=${REDIRECT_URI}`;
    } catch (e) {
        console.log(e);
    }
};

export const oAuth = createAsyncThunk('auth/signin', async (code: string) => {
    await axios({
        url: O_AUTH_URL,
        method: 'POST',
        data: {
            code,
            redirect_uri: REDIRECT_URI
        }
    });
});

const auth = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthorization: (state, action: PayloadAction<boolean>) => {
            state.isAuthorized = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logout.fulfilled, (state) => {
            state.isAuthorized = false;
        });
        builder.addCase(login.fulfilled, (state) => {
            state.isAuthorized = true;
        });
        builder.addCase(login.rejected, () => {
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
export const { setAuthorization } = auth.actions;

export default auth.reducer;

export const isAuthorized = (state: RootState) => state.auth.isAuthorized;
