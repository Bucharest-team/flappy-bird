import { changeScreen, currentScreenSize } from '@slices/game';
import { store, Store } from '../../__data__/store';

import { Background } from './components/background';
import { Bird } from './components/bird';
import { GameOver } from './components/game-over';
import { GetReady } from './components/get-ready';
import { Pipes } from './components/pipes';
import { Score } from './components/score';
import { ContextType, GameGlobalState, GameStatus } from './types';

export class GameLoop {
    public globalState: GameGlobalState;
    private canvas: HTMLCanvasElement | null;
    private requestAnimationFrameId!: number;

    private readonly background: Background;
    private readonly getReady: GetReady;
    private readonly bird: Bird;
    private readonly gameOver: GameOver;
    private readonly pipes: Pipes;
    private readonly score: Score;
    private store: Store;

    constructor(ctx: ContextType, canvas: HTMLCanvasElement | null) {
        this.store = store;

        this.globalState = {
            status: 0,
            frames: 0,
            isFullScreen: currentScreenSize(this.store.getState())
        };

        this.canvas = canvas;

        this.background = new Background(ctx, this.globalState);
        this.getReady = new GetReady(ctx, this.globalState);
        this.bird = new Bird(ctx, this.globalState);
        this.gameOver = new GameOver(ctx, this.globalState);
        this.score = new Score(ctx, this.globalState);
        this.pipes = new Pipes(ctx, this.globalState, this.bird, this.score);
    }

    init() {
        this.canvas?.addEventListener('click', this.updateGameStatus);
        document.addEventListener('keypress', this.handleKeyPress);
        this.loop();
    }

    private handleKeyPress = (event: KeyboardEvent) => {
        event.preventDefault();
        if (event.code === 'Enter') {
            this.store.dispatch(changeScreen());
            this.globalState.isFullScreen = !this.globalState.isFullScreen;
        }
    };

    private updateGameStatus = () => {
        const { status } = this.globalState;

        if (status === GameStatus.Start) {
            this.setPlaying();
            this.score.reset();
        } else if (status === GameStatus.Playing) {
            this.bird.flup();
        } else if (status === GameStatus.Over) {
            this.setStart();
        }
    };

    destroy = () => {
        this.canvas?.removeEventListener('click', this.updateGameStatus);
        document.removeEventListener('keypress', this.handleKeyPress);
        cancelAnimationFrame(this.requestAnimationFrameId);
    };

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
        this.globalState.frames += 1;
    }

    private draw() {
        this.background.draw();
        this.pipes.draw();
        this.getReady.draw();
        this.bird.draw();
        this.gameOver.draw();
        this.score.draw();
    }

    private update() {
        this.bird.update();
        this.pipes.update();
        this.background.update();
    }

    private loop = () => {
        this.update();
        this.draw();
        this.incrementFrame();

        this.requestAnimationFrameId = requestAnimationFrame(this.loop);
    };
}
