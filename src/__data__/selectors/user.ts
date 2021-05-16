import { RootState } from '../store';

export const isLoggedIn = (state: RootState) => state.user.isLogin;
