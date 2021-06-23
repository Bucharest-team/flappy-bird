import { RouterState } from 'connected-react-router';
import { SliceState as AuthState } from './slices/auth';
import { State as ProfileState } from './slices/profile';
import { State as GameState } from './slices/game';
import { State as LeaderboardState } from './slices/leaderboard';

export interface RootState {
    readonly router: RouterState;
    readonly auth: AuthState;
    readonly profile: ProfileState;
    readonly game: GameState;
    readonly leaderboard: LeaderboardState;
}
