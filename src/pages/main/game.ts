import { Background } from './components/background'
import { Bird } from './components/bird'
import { GameOver } from './components/game-over'
import { GetReady } from './components/get-ready'
import { GameState } from './game-state'
import { ContextType } from './types'

export class Game extends GameState {
    private canvas: HTMLCanvasElement | null
    private requestAnimationFrameId!: number

    private Background: Background
    private GetReady: GetReady
    private Bird: Bird
    private GameOver: GameOver

    constructor(ctx: ContextType, canvas: HTMLCanvasElement | null) {
        super()

        this.canvas = canvas

        this.Background = new Background(ctx, this.globalState)
        this.GetReady = new GetReady(ctx, this.globalState)
        this.Bird = new Bird(ctx, this.globalState)
        this.GameOver = new GameOver(ctx, this.globalState)
    }

    init() {
        this.canvas?.addEventListener('click', this.updateGameStatus)
        this.loop()
    }

    private updateGameStatus = () => {
        const { status } = this.globalState

        if (status === 'getReady') {
            this.setPlaying()
        } else if (status === 'playing') {
            this.Bird.flup()
        } else if (status === 'gameOver') {
            this.setGetReady()
        }
    }

    destroy = () => {
        this.canvas?.removeEventListener('click', this.updateGameStatus)
        cancelAnimationFrame(this.requestAnimationFrameId)
    }

    private draw() {
        this.Background.draw()
        this.GetReady.draw()
        this.Bird.draw()
        this.GameOver.draw()
    }

    private update() {
        this.Bird.update()
        this.Background.update()
    }

    private loop = () => {
        this.update()
        this.draw()
        this.incrementFrame()

        this.requestAnimationFrameId = requestAnimationFrame(this.loop)
    }
}
