import React from 'react';
import { Redirect } from 'react-router-dom';

import { withPrivateRoute } from '../../hoc/with-private-route';
import { GameLoop } from './game-loop';
import { CANVAS_DIMENSIONS } from './constants';
import { Wrapper } from './game.style';

export const Game = withPrivateRoute(() => {
    const canvas = React.useRef<HTMLCanvasElement | null>(null);

    React.useEffect(() => {
        const ctx = canvas.current?.getContext('2d');

        const game = new GameLoop(ctx, canvas.current);
        game.init();

        return game.destroy;
    }, []);

    if (!localStorage.getItem('login')) {
        return <Redirect to="/login" />;
    }

    return (
        <Wrapper>
            <canvas ref={canvas} {...CANVAS_DIMENSIONS} />
        </Wrapper>
    );
});
