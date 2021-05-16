import React from 'react';

import { withPrivateRoute } from '../../hoc/with-private-route';
import { Game } from './game';
import { CANVAS_DIMENSIONS } from './constants';
import { Wrapper } from './main.style';

export const Main = withPrivateRoute(() => {
    const canvas = React.useRef<HTMLCanvasElement | null>(null);

    React.useEffect(() => {
        const ctx = canvas.current?.getContext('2d');

        const game = new Game(ctx, canvas.current);
        game.init();

        return game.destroy;
    }, []);

    return (
        <Wrapper>
            <canvas ref={canvas} {...CANVAS_DIMENSIONS} />
        </Wrapper>
    );
});
