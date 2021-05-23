import { Component } from '../component';
import { CANVAS_DIMENSIONS } from '../constants';
import { ContextType, GameGlobalState, GameStatus } from '../types';

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

        const { status } = this.globalState;

        this.ctx.fillStyle = '#FFF';
        this.ctx.strokeStyle = '#000';

        if (status === GameStatus.Playing) {
            this.ctx.lineWidth = 2;
            this.ctx.font = '35px Teko';
            this.ctx.fillText(String(this.value), CANVAS_DIMENSIONS.width / 2, 50);
            this.ctx.strokeText(String(this.value), CANVAS_DIMENSIONS.width / 2, 50);
            return;
        }

        if (status === GameStatus.Over) {
            this.ctx.font = '25px Teko';
            this.ctx.fillText(String(this.value), 225, 186);
            this.ctx.strokeText(String(this.value), 225, 186);

            this.ctx.fillText(String(this.best), 225, 228);
            this.ctx.strokeText(String(this.best), 225, 228);
        }
    }

    reset() {
        this.value = 0;
    }
}
