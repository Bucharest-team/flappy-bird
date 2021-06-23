import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../types';
import axios from '../axios';

export type TUpdateUserData = {
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
};

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
    success: boolean;
};

type Info = Omit<State, 'isLoading' | 'hasError' | 'success'>;

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
    hasError: false,
    success: false
};

const USER_URL = '/auth/user';
const USER_AVATAR_URL = '/user/profile/avatar';
const UPDATE_PROFILE_URL = '/user/profile';

export const getProfileInfo = createAsyncThunk('profile/fetch', async () => {
    const { data } = await axios.get(USER_URL);
    return data;
});

export const updateAvatar = createAsyncThunk('profile/avatar/update', async (file: File) => {
    const formData = new FormData();
    formData.append('avatar', file);
    const { data } = await axios.put(USER_AVATAR_URL, formData);
    return data;
});

export const updateUserData = createAsyncThunk('profile/update', async (userData: TUpdateUserData): Promise<State> => {
    const { data } = await axios.put(UPDATE_PROFILE_URL, userData);
    return data;
});

function updateProfile(state: State, profile: Info) {
    Object.entries(profile).forEach(([key, value]) => {
        // @ts-ignore
        state[key] = value || '';
    });
}

const profile = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        reset(state) {
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(updateUserData.fulfilled, (state, action) => {
            state.success = true;
            updateProfile(state, action.payload);
        });
        builder.addCase(getProfileInfo.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProfileInfo.fulfilled, (state, action: PayloadAction<Info>) => {
            state.isLoading = false;
            updateProfile(state, action.payload);
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

export const { reset } = profile.actions;
export default profile.reducer;

export const profileInfo = (state: RootState) => state.profile;
