import { GameGlobalState, GameStatus } from './types'

export class GameState {
    protected globalState: GameGlobalState

    constructor() {
        this.globalState = {
            status: 'getReady',
            frames: 0
        }
    }

    private setGameStatus(status: GameStatus) {
        this.globalState.status = status
    }

    setPlaying() {
        this.setGameStatus('playing')
    }

    setGetReady() {
        this.setGameStatus('getReady')
    }

    setGameOver() {
        this.setGameStatus('gameOver')
    }

    incrementFrame() {
        this.globalState.frames += 1
    }
}
