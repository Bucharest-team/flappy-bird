import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SliceState = {
    value: number
};

const initialState: SliceState = { value: 0 };

const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        inc: (state) => {
            state.value += 1;
        },
        dec: (state) => {
            state.value -= 1;
        },
        set: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        }
    }
});

export default counter.reducer;
export const { inc, dec, set } = counter.actions;
