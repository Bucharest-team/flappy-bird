import { RouterState } from 'connected-react-router';
import { SliceState as UserState } from './slices/user';
import { State as ProfileState } from './slices/profile';
import { State as GameState } from './slices/game';

export interface RootState {
    readonly router: RouterState;
    readonly user: UserState;
    readonly profile: ProfileState;
    readonly game: GameState;
}
