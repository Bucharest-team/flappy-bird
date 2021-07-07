import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Typography from '@material-ui/core/Typography';

import type { ThemeTypes } from '../../theme/theme';

export const Wrapper = styled.div(({ theme }: ThemeTypes) => css`
    position: relative;
    text-align: center;
    color: ${theme?.textPrimary};
    box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);
    padding: 32px;
    background-color:${theme?.cardBg};
    border-radius: 8px;
    margin-bottom: 48px;
`);

export const Headline = styled(Typography)(({ theme }: ThemeTypes) => css`
    color: ${theme?.textPrimary};
    margin-bottom: 12px;
`);

export const AuthorStyled = styled(Typography)`
    position: absolute;
    bottom: 32px;
    right: 16px;
`;

export const Body = styled(Typography)`
    margin-top: 32px;
    margin-bottom: 32px;
    text-align: left;
`;

export const RatingButton = styled.button(({ theme, active }: any) => css`
    display: flex;
    align-items: center;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    color: ${theme.textPrimary};
    color: ${active && theme.linkColor};
    
    svg {
        margin-right: 4px;
    }
    
    &:hover {
        color: ${theme.linkColor};
    
        svg {
            fill: ${theme.linkColor}
        }
    }
`);
