import React from 'react';
import { Redirect } from 'react-router-dom';

import { Game } from './game';
import { CANVAS_DIMENSIONS } from './constants';
import { Wrapper } from './main.style';

export const Main = () => {
    const canvas = React.useRef<HTMLCanvasElement | null>(null);

    React.useEffect(() => {
        const ctx = canvas.current?.getContext('2d');

        const game = new Game(ctx, canvas.current);
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
};
