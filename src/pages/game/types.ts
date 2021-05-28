export type ContextType = CanvasRenderingContext2D | null | undefined;

export type GameGlobalState = {
    status: GameStatus;
    frames: number;
    isFullScreen: boolean;
};

export enum GameStatus {
    Start, Playing, Over
}
