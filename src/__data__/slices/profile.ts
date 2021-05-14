import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../axios';

type Nullable<T> = T | null | undefined;

type State = {
    avatar: Nullable<string>;
    email: Nullable<string>;
    login: Nullable<string>;
    first_name: Nullable<string>;
    second_name: Nullable<string>;
    display_name: Nullable<string>;
    phone: Nullable<string>;
    id: Nullable<number>;
    isLoading: boolean;
    hasError: boolean;
};

type Info = Omit<State, 'isLoading' | 'hasError'>;

const initialState: State = {
    avatar: null,
    email: null,
    login: null,
    first_name: null,
    second_name: null,
    display_name: null,
    phone: null,
    id: null,
    isLoading: false,
    hasError: false
};

const USER_URL = '/auth/user';

export const getProfileInfo = createAsyncThunk('profile/fetch', async () => {
    const { data } = await axios.get(USER_URL);
    return data;
});

const profile = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProfileInfo.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProfileInfo.fulfilled, (state, action: PayloadAction<Info>) => {
            state.isLoading = false;
            Object.entries(action.payload).forEach(([key, value]) => {
                // @ts-ignore, не знаю как поправить ворнинг
                state[key] = value ?? '';
            });
        });
        builder.addCase(getProfileInfo.rejected, (state) => {
            state.hasError = true;
        });
    }
});

export default profile.reducer;
