import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

export const globalStyles = css`
    ${emotionNormalize}
    body {
        font-family: 'Roboto', sans-serif;
    }
`;
