import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../types';

export type State = {
    isFullScreen: boolean
};

export const initialState: State = {
    isFullScreen: false
};

const game = createSlice({
    name: 'game',
    initialState,
    reducers: {
        changeScreen(state) {
            state.isFullScreen = !state.isFullScreen;
        }
    }
});

export const { changeScreen } = game.actions;
export default game.reducer;

export const currentScreenSize = (state: RootState) => state.game.isFullScreen;
