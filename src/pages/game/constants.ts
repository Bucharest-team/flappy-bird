export const CANVAS_DIMENSIONS = {
    width: 320,
    height: 480
};

export const FULL_CANVAS_DIMENSIONS = {
    width: 480,
    height: 580
};

export const getCanvasDimensions = (isFullScreen: boolean) => isFullScreen ? FULL_CANVAS_DIMENSIONS : CANVAS_DIMENSIONS;

export const FOREGROUND_HEIGHT = 112;
