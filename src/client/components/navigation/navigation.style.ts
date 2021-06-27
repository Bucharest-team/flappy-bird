import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { AppBar, Drawer as MuiDrawer, ListItem as MuiListItem } from '@material-ui/core';
import { ThemeTypes } from 'client/theme/theme';

export const Header = styled(AppBar)(({ theme }: ThemeTypes) => {
    return css`
        background-color: ${theme?.mainBg};
    `;
});

export const DrawerStyled = styled(MuiDrawer)(({ theme }: ThemeTypes) => css`
    .MuiPaper-root {
        background-color: ${theme?.drawerBg};
    }
`);

export const ListItem = styled(MuiListItem)(({ theme }: ThemeTypes) => css`
    color: ${theme?.textPrimary};

    svg {
        fill: ${theme?.svgColor};
    }

    &:hover {
        background-color: ${theme?.itemHover};
    }
`);

export const Wrapper = styled.div`
    width: 300px;
`;

export const Title = styled(Typography)`
    flex-grow: 1;
    margin-left: 16px;
    user-select: none;
`;

export const Link = styled(RouterLink)`
    text-decoration: none;
    color: inherit;
`;
