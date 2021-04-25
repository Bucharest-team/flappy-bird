export type ContextType = CanvasRenderingContext2D | null | undefined

export type GameStatus = 'getReady' | 'playing' | 'gameOver'

export type GameGlobalState = {
    status: GameStatus
    frames: number
}
