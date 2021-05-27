/* eslint-disable no-magic-numbers */
import { getCanvasDimensions } from '../constants';
import { Component } from '../component';
import { ContextType, GameGlobalState, GameStatus } from '../types';

// класс для отрисовки состояние готовности игры
export class GetReady extends Component {
    globalState: GameGlobalState;
    // координаты и размеры get ready message из спрайта
    private state = {
        sX: 0,
        sY: 228,
        w: 173,
        h: 152,
        x: 173 / 2,
        y: 80
    };

    constructor(ctx: ContextType, globalState: GameGlobalState) {
        super(ctx);
        this.globalState = globalState;
    }

    draw() {
        if (!this.ctx) return;

        const { sX, sY, w, h, x, y } = this.state;
        const { status, isFullScreen } = this.globalState;
        const CANVAS_DIMENSIONS = getCanvasDimensions(isFullScreen);

        if (status === GameStatus.Start) {
            this.ctx.drawImage(this.sprite, sX, sY, w, h, CANVAS_DIMENSIONS.width / 2 - x, y, w, h);
        }
    }
}
