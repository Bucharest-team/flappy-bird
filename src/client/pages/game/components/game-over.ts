/* eslint-disable no-magic-numbers */
import { getCanvasDimensions } from '../constants';

import { Component } from '../component';
import { ContextType, GameGlobalState, GameStatus } from '../types';

// класс для отрисовки и обновления состояния конца игры
export class GameOver extends Component {
    private globalState: GameGlobalState;
    // координаты и размеры game over message
    private state = {
        sX: 175,
        sY: 228,
        w: 225,
        h: 202,
        x: 225 / 2,
        y: 90
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

        if (status === GameStatus.Over) {
            this.ctx.drawImage(this.sprite, sX, sY, w, h, CANVAS_DIMENSIONS.width / 2 - x, y, w, h);
        }
    }
}
