/* eslint-disable no-magic-numbers */
import { Component } from '../component';
import { getCanvasDimensions } from '../constants';
import { ContextType, GameGlobalState, GameStatus } from '../types';

const ValueStatusCoords = {
    fullX: 305,
    x: 225,
    y: 186
};
const BestValueStatusCoords = {
    fullX: 305,
    x: 225,
    y: 228,
};

export class Score extends Component {
    value = 0;

    constructor(ctx: ContextType, private globalState: GameGlobalState) {
        super(ctx);
    }

    get best(): number {
        return Number(localStorage.getItem('best')) || 0;
    }

    set best(value: number) {
        localStorage.setItem('best', String(value));
    }

    draw() {
        if (!this.ctx) return;

        const { status, isFullScreen } = this.globalState;
        const CANVAS_DIMENSIONS = getCanvasDimensions(isFullScreen);

        this.ctx.fillStyle = '#FFF';
        this.ctx.strokeStyle = '#000';

        if (status === GameStatus.Playing) {
            this.ctx.lineWidth = 2;
            this.ctx.font = '35px Teko';
            this.ctx.fillText(String(this.value), CANVAS_DIMENSIONS.width / 2, 50);
            this.ctx.strokeText(String(this.value), CANVAS_DIMENSIONS.width / 2, 50);
            return;
        }

        const horizontalCoord = isFullScreen ? ValueStatusCoords.fullX : ValueStatusCoords.x;

        if (status === GameStatus.Over) {
            this.ctx.font = '25px Teko';
            this.ctx.fillText(String(this.value), horizontalCoord, ValueStatusCoords.y);
            this.ctx.strokeText(String(this.value), horizontalCoord, ValueStatusCoords.y);

            this.ctx.fillText(String(this.best), horizontalCoord, BestValueStatusCoords.y);
            this.ctx.strokeText(String(this.best), horizontalCoord, BestValueStatusCoords.y);
        }
    }

    reset() {
        this.value = 0;
    }
}
