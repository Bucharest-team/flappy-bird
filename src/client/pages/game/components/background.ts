/* eslint-disable no-magic-numbers */
import { getCanvasDimensions } from '../constants';

import { Component } from '../component';
import { ContextType, GameGlobalState, GameStatus } from '../types';

export const BACKGROUND = '#70c5ce';

// класс для отрисовки и обновления фона
export class Background extends Component {
    private globalState: GameGlobalState;
    private state = {
        // координаты и размеры фона из спрайта
        bg: {
            sX: 0,
            sY: 0,
            w: 275,
            h: 226,
            x: 0,
            y: 226
        },
        // координаты и размеры фона дороги
        foreground: {
            sX: 276,
            sY: 0,
            w: 224,
            h: 112,
            x: 0,
            y: 112,
            dX: 2
        }
    };

    constructor(ctx: ContextType, globalState: GameGlobalState) {
        super(ctx);
        this.globalState = globalState;
    }

    draw() {
        if (!this.ctx) return;

        const { bg, foreground } = this.state;
        const CANVAS_DIMENSIONS = getCanvasDimensions(this.globalState.isFullScreen);

        // отрисовка цвета фона
        this.ctx.fillStyle = BACKGROUND;
        this.ctx.fillRect(0, 0, CANVAS_DIMENSIONS.width, CANVAS_DIMENSIONS.height);

        // отрисовка фона из спрайта
        this.ctx.drawImage(this.sprite, bg.sX, bg.sY, bg.w, bg.h, bg.x, CANVAS_DIMENSIONS.height - bg.y, bg.w, bg.h);
        this.ctx.drawImage(this.sprite, bg.sX, bg.sY, bg.w, bg.h, bg.x + bg.w, CANVAS_DIMENSIONS.height - bg.y, bg.w, bg.h);

        // отрисовка переднего плана
        this.ctx.drawImage(
            this.sprite,
            foreground.sX,
            foreground.sY,
            foreground.w,
            foreground.h,
            foreground.x,
            CANVAS_DIMENSIONS.height - foreground.y,
            foreground.w,
            foreground.h
        );
        this.ctx.drawImage(
            this.sprite,
            foreground.sX,
            foreground.sY,
            foreground.w,
            foreground.h,
            foreground.x + foreground.w,
            CANVAS_DIMENSIONS.height - foreground.y,
            foreground.w,
            foreground.h
        );
        this.ctx.drawImage(
            this.sprite,
            foreground.sX,
            foreground.sY,
            foreground.w,
            foreground.h,
            foreground.x + (foreground.w * 2),
            CANVAS_DIMENSIONS.height - foreground.y,
            foreground.w,
            foreground.h
        );
    }

    update() {
        const { x, dX, w } = this.state.foreground;
        const { status } = this.globalState;

        if (status === GameStatus.Playing) {
            this.state.foreground.x = (x - dX) % (w / 2);
        }
    }
}
