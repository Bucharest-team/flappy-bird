import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Typography } from '@material-ui/core';

import { CANVAS_DIMENSIONS, FULL_CANVAS_DIMENSIONS } from './constants';

export const Wrapper = styled.div(({ fullScreen }: any) => css`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    canvas {
        width: ${fullScreen ? FULL_CANVAS_DIMENSIONS.width : CANVAS_DIMENSIONS.width}px;
        height: ${fullScreen ? FULL_CANVAS_DIMENSIONS.height : CANVAS_DIMENSIONS.height}px;
        border: 1px solid black;
        margin-top: 48px;
    }
`);

export const Title = styled(Typography)`
    margin-top: 32px;
    user-select: none;
    text-align: center;
    font-size: 24px;
`;
