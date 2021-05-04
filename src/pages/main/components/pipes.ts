import { Component } from '../component';
import { CANVAS_DIMENSIONS } from '../constants';
import { ContextType, GameGlobalState, GameStatus } from '../types';
import { Bird } from './bird';
import { Score } from './score';

export class Pipes extends Component {
    private position: { x: number, y: number }[] = [];
    private state = {
        top: {
            sX: 553,
            sY: 0
        },

        bottom: {
            sX: 502,
            sY: 0
        },

        w: 53,
        h: 400,
        gap: 100,
        maxYPos: -150,
        dx: 2
    };

    constructor(public ctx: ContextType,
        private globalState: GameGlobalState,
        private bird: Bird,
        private score: Score) {
        super(ctx);
    }

    draw() {
        if (!this.ctx) return;

        const { top, bottom, w, h, gap, } = this.state;

        for (let i = 0; i < this.position.length; i += 1) {
            const p = this.position[i];

            const topYPos = p.y;
            const bottomYPos = p.y + h + gap;

            this.ctx.drawImage(this.sprite, top.sX, top.sY, w, h, p.x, topYPos, w, h);
            this.ctx.drawImage(this.sprite, bottom.sX, bottom.sY, w, h, p.x, bottomYPos, w, h);
        }
    }

    update() {
        const { frames } = this.globalState;
        const { w, h, gap, maxYPos, dx } = this.state;
        const bird = this.bird.state;
        const radius = 5;

        if (this.globalState.status !== GameStatus.Playing) return;

        if (frames % 100 === 0) {
            this.position.push({ x: CANVAS_DIMENSIONS.width, y: maxYPos * (Math.random() + 1) });
        }

        for (let i = 0; i < this.position.length; i += 1) {
            const p = this.position[i];

            const bottomPipeYPos = p.y + h + gap;

            if (bird.x + radius > p.x &&
                bird.x - radius < p.x + w &&
                bird.y + radius > p.y &&
                bird.y - radius < p.y + h) {
                this.globalState.status = GameStatus.Over;
                this.position = [];
            }

            if (bird.x + radius > p.x &&
                bird.x - radius < p.x + w &&
                bird.y + radius > bottomPipeYPos &&
                bird.y - radius < bottomPipeYPos + h) {
                this.globalState.status = GameStatus.Over;
                this.position = [];
            }

            p.x -= dx;

            if (p.x + w <= 0) {
                this.position.shift();
                this.score.value += 1;
                this.score.best = Math.max(this.score.value, this.score.best);
            }
        }
    }
}
