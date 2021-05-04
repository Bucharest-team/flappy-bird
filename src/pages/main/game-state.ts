import { GameGlobalState, GameStatus } from './types';

export class GameState {
    protected globalState: GameGlobalState;

    constructor() {
        this.globalState = {
            status: 0,
            frames: 0
        };
    }

    private set gameStatus(status: GameStatus) {
        this.globalState.status = status;
    }

    setPlaying() {
        this.gameStatus = GameStatus.Playing;
    }

    setStart() {
        this.gameStatus = GameStatus.Start;
    }

    setGameOver() {
        this.gameStatus = GameStatus.Over;
    }

    incrementFrame() {
        this.globalState.frames++;
    }
}
