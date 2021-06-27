import React from 'react';
import { useSelector } from 'react-redux';

import { currentScreenSize } from '@slices/game';
import { Meta } from '@components/meta';
import { useProfile } from '@hooks/use-profile';
import { withPrivateRoute } from '../../hoc/with-private-route';

import { GameLoop } from './game-loop';
import { getCanvasDimensions } from './constants';
import { Wrapper, Title } from './game.style';

export const Game = withPrivateRoute(() => {
    const canvas = React.useRef<HTMLCanvasElement | null>(null);
    const isFullScreen = useSelector(currentScreenSize);

    React.useEffect(() => {
        const ctx = canvas.current?.getContext('2d');

        const game = new GameLoop(ctx, canvas.current);
        game.init();

        return game.destroy;
    }, []);

    React.useEffect(() => {
        if (isFullScreen && !document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        }

        if (!isFullScreen && document.exitFullscreen) {
            document.exitFullscreen();
        }
    }, [isFullScreen]);

    useProfile();

    return (
        <React.Fragment>
            <Meta title="Играть во Flappy-Bird" description="Запуск игры Flappy-Bird" />
            <Title variant="h2">
                {isFullScreen
                    ? 'Чтобы выйти из полноэкранного режима нажмите Enter'
                    : 'Чтобы перейти в полноэкранный режим нажмите Enter'}
            </Title>
            <Wrapper fullScreen={isFullScreen}>
                <canvas ref={canvas} {...getCanvasDimensions(isFullScreen)} />
            </Wrapper>
        </React.Fragment>
    );
});
