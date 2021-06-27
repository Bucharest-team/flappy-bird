import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

export const globalStyles = css`
    ${emotionNormalize}
    body {
        height: 100vh;
        font-family: 'Roboto', sans-serif;
    }

    #root {
        width: 100%;
        height: 100%;
    }
`;
