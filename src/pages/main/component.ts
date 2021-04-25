import sprite from '../../images/sprite.png'

import { ContextType } from './types'

export abstract class Component {
    protected ctx: ContextType
    protected sprite: HTMLImageElement

    constructor(ctx: ContextType) {
        this.ctx = ctx

        this.sprite = new Image()
        this.sprite.src = sprite
    }

    draw() {
        throw new Error('Method "draw" should be implemented')
    }

    update() {}
}
