import { CANVAS_DIMENSIONS } from '../constants'
import { Component } from '../component'
import { ContextType, GameGlobalState } from '../types'

// класс для отрисовки состояние готовности игры
export class GetReady extends Component {
    globalState: GameGlobalState
    // координаты и размеры get ready message из спрайта
    private state = {
        sX: 0,
        sY: 228,
        w: 173,
        h: 152,
        x: CANVAS_DIMENSIONS.width / 2 - 173 / 2,
        y: 80
    }

    constructor(ctx: ContextType, globalState: GameGlobalState) {
        super(ctx)
        this.globalState = globalState
    }

    draw() {
        if (!this.ctx) {
            return
        }

        const { sX, sY, w, h, x, y } = this.state
        const { status } = this.globalState

        if (status === 'getReady') {
            this.ctx.drawImage(this.sprite, sX, sY, w, h, x, y, w, h)
        }
    }
}
