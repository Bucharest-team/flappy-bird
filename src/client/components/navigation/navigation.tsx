import React from 'react';
import { Toolbar, IconButton, Switch, FormControlLabel } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { ThemeContext } from '../../theme/theme.context';

import type { Props } from './types';
import { Header, Link, Title } from './navigation.style';
import { Drawer } from './drawer';

export const Navigation = ({ isLoggedIn }: Props) => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const { mode, handleThemeChange } = React.useContext(ThemeContext);

    const toggleDrawer = React.useCallback(() => {
        setToggleMenu(!toggleMenu);
    }, [toggleMenu]);

    return (
        <React.Fragment>
            <Header position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Title variant="h6">Flappy Bird</Title>
                    <FormControlLabel
                        control={<Switch onChange={handleThemeChange} aria-label="switch theme" />}
                        label={mode === 'light' ? 'Темная тема' : 'Светлая тема'}
                    />
                    <Link to="/profile">
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Link>
                </Toolbar>
            </Header>
            <Drawer isLoggedIn={isLoggedIn} toggleDrawer={toggleDrawer} toggleMenu={toggleMenu} />
        </React.Fragment>
    );
};

Navigation.defaultProps = {
    isLoggedIn: false
};
