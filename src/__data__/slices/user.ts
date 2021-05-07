import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserApi } from '../../api/userApi';

type SliceState = {
    userID: number | null;
    isLogin: boolean;
};

const initialState: SliceState = { userID: null, isLogin: false };

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<number>) => {
            state.userID = action.payload;
        },
    },
});
export const { setUser } = user.actions;

export const auth = (payload: any) => (dispatch: any) => {
    UserApi.login(payload)
        .then(() => {
            localStorage.setItem('login', 'true');
        })
        .catch(() => {
            alert('Неверный логин или пароль!');
        });
};

export const register = (payload: any) => (dispatch: any) => {
    UserApi.register(payload)
        .then(() => {
            localStorage.setItem('login', 'true');
        })
        .catch(() => {
            alert('Произошла ошибка!');
        });
};

export default user.reducer;
