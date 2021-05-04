import { Background } from './components/background';
import { Bird } from './components/bird';
import { GameOver } from './components/game-over';
import { GetReady } from './components/get-ready';
import { Pipes } from './components/pipes';
import { Score } from './components/score';
import { GameState } from './game-state';
import { ContextType, GameStatus } from './types';

export class Game extends GameState {
    private canvas: HTMLCanvasElement | null;
    private requestAnimationFrameId!: number;

    private readonly background: Background;
    private readonly getReady: GetReady;
    private readonly bird: Bird;
    private readonly gameOver: GameOver;
    private readonly pipes: Pipes;
    private readonly score: Score;

    constructor(ctx: ContextType, canvas: HTMLCanvasElement | null) {
        super();

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
        this.loop();
    }

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
        cancelAnimationFrame(this.requestAnimationFrameId);
    };

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
