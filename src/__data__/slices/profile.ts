import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../types';
import axios from '../axios';

const PROFILE_FETCH = 'profile/fetch';
const PROFILE_AVATAR_UPDATE = 'profile/avatar/update';

export type TUpdateUserData = {
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
}

export type State = {
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

export const initialState: State = {
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
const USER_AVATAR_URL = '/user/profile/avatar';
const UPDATE_PROFILE_URL = '/user/profile';

export const getProfileInfo = createAsyncThunk(PROFILE_FETCH, async () => {
    const { data } = await axios.get(USER_URL);
    return data;
});

export const updateAvatar = createAsyncThunk(PROFILE_AVATAR_UPDATE, async (formData: FormData) => {
    const { data } = await axios.put(USER_AVATAR_URL, formData);
    return data;
});

export const updateUserData = async (userData: TUpdateUserData): Promise<State> => {
    const { data } = await axios.put(UPDATE_PROFILE_URL, userData);
    return data;
};


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
            state.isLoading = false;
            state.hasError = true;
        });
        builder.addCase(updateAvatar.fulfilled, (state, action) => {
            state.avatar = action.payload.avatar;
        });
        builder.addCase(updateAvatar.rejected, (state) => {
            state.hasError = true;
        });
    }
});

export default profile.reducer;

export const profileInfo = (state: RootState) => state.profile;
