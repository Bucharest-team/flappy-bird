import { Component } from '../component';
import { CANVAS_DIMENSIONS } from '../constants';
import { ContextType, GameGlobalState, GameStatus } from '../types';
import { Bird } from './bird';
import { Score } from './score';

export class Pipes extends Component {
    private positions: { x: number, y: number }[] = [];
    private radius: number = 5;
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

        for (let i = 0; i < this.positions.length; i += 1) {
            const p = this.positions[i];

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

        if (this.globalState.status !== GameStatus.Playing) return;

        if (frames % 100 === 0) {
            this.positions.push({ x: CANVAS_DIMENSIONS.width, y: maxYPos * (Math.random() + 1) });
        }

        for (let i = 0; i < this.positions.length; i += 1) {
            const p = this.positions[i];

            const bottomPipeYPos = p.y + h + gap;

            if (bird.x + this.radius > p.x &&
                bird.x - this.radius < p.x + w &&
                bird.y + this.radius > p.y &&
                bird.y - this.radius < p.y + h) {
                this.globalState.status = GameStatus.Over;
                this.positions = [];
            }

            if (bird.x + this.radius > p.x &&
                bird.x - this.radius < p.x + w &&
                bird.y + this.radius > bottomPipeYPos &&
                bird.y - this.radius < bottomPipeYPos + h) {
                this.globalState.status = GameStatus.Over;
                this.positions = [];
            }

            p.x -= dx;

            if (p.x + w <= 0) {
                this.positions.shift();
                this.score.value += 1;
                this.score.best = Math.max(this.score.value, this.score.best);
            }
        }
    }
}
