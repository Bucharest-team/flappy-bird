import { css } from '@emotion/react';
import styled from '@emotion/styled';
import CardMui from '@material-ui/core/Card';
import CardActionsMui from '@material-ui/core/CardActions';
import TypographyMui from '@material-ui/core/Typography';
import CardContentMui from '@material-ui/core/CardContent';
import type { ThemeTypes } from 'client/theme/theme';
import { Link as RouterLink } from 'react-router-dom';

export const Card = styled(CardMui)(({ theme }: ThemeTypes) => css`
    margin-bottom: 32px;
    background-color: ${theme?.cardBg};
    
    h3, h5, p {
        color: ${theme?.textPrimary};
    }
`);

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CardContent = styled(CardContentMui)(({ theme }: ThemeTypes) => {
    const gradient = theme?.mode === 'light' ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff 75%)' : '';
    return css`
        max-height: 100px;
        overflow: hidden;
        margin-top: -30px;
        
        &:before {
            content: "";
            display: block;
            height: 30px;
            position: relative;
            top: 86px;
            background-image: ${gradient}
        }
    `;
});

export const Link = styled(RouterLink)`
    text-decoration: none;
    color: ${({ theme }: ThemeTypes) => theme?.linkColor};
    font-size: 18px;
    line-height: 1;

    &:hover {
        text-decoration: underline;
    }
`;

export const Body2 = styled(TypographyMui)`
    margin-right: 12px;
`;

export const CardActions = styled(CardActionsMui)`
    padding: 16px;
    > div:not(:first-child) {
        margin-left: auto;
    }
`;

export const RatingStyled = styled.div(({ theme }: ThemeTypes) => css`
    display: flex;
    align-items: center;
    color: ${theme?.textPrimary};
`);
