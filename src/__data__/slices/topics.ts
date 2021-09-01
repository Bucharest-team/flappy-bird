import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../types';

import { axiosBack } from '../axios';

export type Likes = {
    id: number;
    userId: string;
};

export type Comment = {
    id: number;
    text: string;
    rating: number;
    author: string;
    replayId?: number;
};

export type Topic = {
    id?: number;
    title: string;
    description: string;
    rating?: number;
    author: string;
    comments?: Array<Comment>;
    likes?: Array<Likes>;
    createdAt: Date;
};

export type Topics = Array<Topic>;

export type State = {
    allTopics: Topics;
    currentTopic: Topic | null;
    isLoading: boolean;
    hasError: boolean;
};

export const initialState: State = {
    allTopics: [],
    currentTopic: null,
    isLoading: false,
    hasError: false
};

const TOPICS_FETCH = 'topics/fetch';
const TOPICS_CREATE = 'topics/create';
const TOPICS_FETCH_ONE = 'topics/fetch/one';
const TOPICS_UPDATE_RATING = 'topics/update/ratings';
const COMMENT_CREATE = 'comments/create';
const LIKES_SET = 'likes/set';

const TOPICS_URL = '/topic';
const COMMENT_URL = '/comment';
const LIKE_URL = '/like';

export const getAllTopics = createAsyncThunk(TOPICS_FETCH, async () => {
    const { data } = await axiosBack.get(TOPICS_URL);
    return data;
});

export const getTopic = createAsyncThunk(TOPICS_FETCH_ONE, async (id: number | undefined) => {
    const { data } = await axiosBack.get(`${TOPICS_URL}/${id}`);
    return data;
});

export const createTopic = createAsyncThunk(TOPICS_CREATE, async (object: Topic) => {
    console.log(object);
    const { data } = await axiosBack.post(TOPICS_URL, object);
    return data;
});

export const createComments = createAsyncThunk(COMMENT_CREATE, async (object: Comment) => {
    const { data } = await axiosBack.post(COMMENT_URL, object);
    return data;
});

const topics = createSlice({
    name: 'topics',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllTopics.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getAllTopics.fulfilled, (state, action) => {
            state.isLoading = false;
            state.allTopics = action.payload;
        });
        builder.addCase(getAllTopics.rejected, (state) => {
            state.isLoading = false;
            state.hasError = true;
        });
        builder.addCase(getTopic.fulfilled, (state, action) => {
            state.currentTopic = action.payload;
        });
        builder.addCase(createTopic.fulfilled, (state, action) => {
            state.allTopics.push(action.payload);
        });
        builder.addCase(createComments.fulfilled, (state, action) => {
            state.currentTopic?.comments?.push(action.payload);
        });
    }
});

export default topics.reducer;

export const getTopics = (state: RootState) => state.topics.allTopics;
export const getCurrentTopic = (state: RootState) => state.topics.currentTopic;
