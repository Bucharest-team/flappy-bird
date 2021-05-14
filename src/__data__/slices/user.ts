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
        setLogin: (state, action: PayloadAction<boolean>) => {
            state.isLogin = action.payload;
        }
    },
});
export const { setUser, setLogin } = user.actions;

export const checkLogin = () => (dispatch: any) => {
    dispatch(setLogin(Boolean(localStorage.getItem('login')) === true));
};

export const auth = (payload: any) => async (dispatch: any) => {
    try {
        await UserApi.login(payload);
        localStorage.setItem('login', 'true');
        dispatch(setLogin(true));
    } catch (e) {
        alert('Неверный логин или пароль!');
    }
};

export const register = (payload: any) => async (dispatch: any) => {
    try {
        await UserApi.register(payload);
        localStorage.setItem('login', 'true');
        dispatch(setLogin(true));
    } catch (e) {
        alert('Неверный логин или пароль!');
    }
};

export default user.reducer;
