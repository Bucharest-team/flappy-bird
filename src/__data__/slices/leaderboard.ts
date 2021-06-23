import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from '../types';
import axios from '../axios';

const LEADERBOARD_FETCH = 'leaderboard/fetch';
const LEADERBOARD_SET = 'leadearboard/set';

export type Leader = {
    name: string;
    'flappy-score': number;
};

export type DataLeader = {
    data: Leader;
};

export type Leaders = Array<DataLeader>;

export type State = {
    isLoading: boolean;
    hasError: boolean;
    listLeader: Array<Leader>;
};

export const initialState: State = {
    isLoading: false,
    hasError: false,
    listLeader: []
};

const LEADERBOARD_URL = '/leaderboard/all';
const LEADERBOARD_UPDATE_URL = '/leaderboard';

export const getLeaderboard = createAsyncThunk(LEADERBOARD_FETCH, async () => {
    const { data } = await axios.post(LEADERBOARD_URL, {
        ratingFieldName: 'flappy-score',
        cursor: 0,
        limit: 100
    });
    return data;
});

export const setLeaderBoard = createAsyncThunk(LEADERBOARD_SET, async (_, thunkApi: any) => {
    const digit = Number(localStorage.getItem('best')) || 0;
    const name = thunkApi.getState().profile['first_name'];
    await axios.post(LEADERBOARD_UPDATE_URL, {
        ratingFieldName: 'flappy-score',
        data: {
            'flappy-score': digit,
            name
        }
    });
});

const leaderboard = createSlice({
    name: 'leaderboard',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getLeaderboard.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(getLeaderboard.fulfilled, (state, action: PayloadAction<Leaders>) => {
            state.isLoading = false;
            state.listLeader = action.payload.map(({ data }) => ({ ...data }));
        });
        builder.addCase(getLeaderboard.rejected, state => {
            state.isLoading = false;
            state.hasError = true;
        });
    }
});

export default leaderboard.reducer;

export const leaderboardInfo = (state: RootState) => state.leaderboard;
