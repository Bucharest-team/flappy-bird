export type ContextType = CanvasRenderingContext2D | null | undefined;

export type GameGlobalState = {
    status: GameStatus;
    frames: number;
}

export enum GameStatus {
    Start = 0,
    Playing = 1,
    Over = 2
} 
