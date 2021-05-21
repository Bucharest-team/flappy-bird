import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../store';
import axios from '../axios';
import { PROFILE_FETCH } from '../action-types';

type State = {
    avatar: string | null;
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    display_name?: string;
    phone?: string;
    id?: number;
    isLoading: boolean;
    hasError: boolean;
};

type Info = Omit<State, 'isLoading' | 'hasError'>;

const initialState: State = {
    avatar: null,
    email: '',
    login: '',
    first_name: '',
    second_name: '',
    display_name: '',
    phone: '',
    id: undefined,
    isLoading: false,
    hasError: false
};

const USER_URL = '/auth/user';

export const getProfileInfo = createAsyncThunk(PROFILE_FETCH, async () => {
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
                // @ts-ignore
                state[key] = value ?? '';
            });
        });
        builder.addCase(getProfileInfo.rejected, (state) => {
            state.hasError = true;
        });
    }
});

export default profile.reducer;

export const profileInfo = (state: RootState) => state.profile;
