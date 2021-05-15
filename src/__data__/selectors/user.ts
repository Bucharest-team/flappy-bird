import { RootState } from '../store';

export const isLoggedIn = (state: RootState) => Boolean(state.user.isLogin) === true;
