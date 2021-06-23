/* eslint-disable no-magic-numbers */
import { Component } from '../component';
import { ContextType, GameGlobalState, GameStatus } from '../types';

import { FOREGROUND_HEIGHT, getCanvasDimensions } from '../constants';

const DEFAULT_COORD = 150;
const DEFAULT_SPEED = 0;
const WING_SPAN = 5;

// класс для отрисовки птицы и ее обновления
export class Bird extends Component {
    private globalState: GameGlobalState;
    state = {
        animation: [
            { sX: 276, sY: 112 },
            { sX: 276, sY: 139 },
            { sX: 276, sY: 164 },
            { sX: 276, sY: 139 }
        ],
        x: 50,
        y: 150,
        w: 34,
        h: 26,
        frame: 0,
        speed: 0,
        gravity: 0.25,
        jump: 4.6
    };
    setOver: Function;

    constructor(ctx: ContextType, globalState: GameGlobalState, setGameOver: Function) {
        super(ctx);
        this.globalState = globalState;
        this.setOver = setGameOver;
    }

    draw() {
        if (!this.ctx) return;

        const bird = this.state.animation[this.state.frame];

        // отрисовка птицы из спрайта
        this.ctx.drawImage(
            this.sprite,
            bird.sX,
            bird.sY,
            this.state.w,
            this.state.h,
            this.state.x - this.state.w / 2,
            this.state.y - this.state.h / 2,
            this.state.w,
            this.state.h
        );
    }

    private animate() {
        const { frames } = this.globalState;
        const { animation } = this.state;

        // увеличиваем кадр на +1 каждый период
        this.state.frame += frames % WING_SPAN === 0 ? 1 : 0;

        // ограничиваем размер по количеству элементов в массиве (0 - 4), если 4, то сбрасываем до 0
        // eslint-disable-next-line operator-assignment
        this.state.frame = this.state.frame % animation.length;
    }

    // гравитация
    private gravity() {
        this.state.speed += this.state.gravity;
        this.state.y += this.state.speed;
    }

    // проверка соприкосновения с землей
    private checkGround() {
        const { status, isFullScreen } = this.globalState;
        const { y, h, jump } = this.state;
        const CANVAS_DIMENSIONS = getCanvasDimensions(isFullScreen);

        if (y + h / 2 >= CANVAS_DIMENSIONS.height - FOREGROUND_HEIGHT) {
            this.state.y = CANVAS_DIMENSIONS.height - FOREGROUND_HEIGHT - h / 2;

            if (status === GameStatus.Playing) {
                this.globalState.status = GameStatus.Over;
                this.setOver();
            }

            if (this.state.speed >= jump) {
                this.state.frame = 1;
            }
        }
    }

    update() {
        this.animate();

        if (this.globalState.status === GameStatus.Start) {
            this.reset();
            return;
        }

        this.gravity();
        this.checkGround();
    }

    // полет
    flup() {
        this.state.speed = -this.state.jump;
    }

    private reset() {
        this.state.y = DEFAULT_COORD;
        this.state.speed = DEFAULT_SPEED;
    }
}
