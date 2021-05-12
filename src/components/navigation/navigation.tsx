import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GameIcon from '@material-ui/icons/SportsEsports';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ForumIcon from '@material-ui/icons/Forum';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import Drawer from '@material-ui/core/Drawer';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { Wrapper, Link, Title } from './navigation.style';

export const Navigation = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    const toggleDrawer = React.useCallback(() => {
        setToggleMenu(!toggleMenu);
    }, [toggleMenu]);

    return (
        <React.Fragment>
            <AppBar position="static">
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
            </AppBar>
            <Drawer open={toggleMenu} onClose={toggleDrawer}>
                <Wrapper role="presentation" onClick={toggleDrawer}>
                    <List>
                        <Link to="/">
                            <ListItem button>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Главная" />
                            </ListItem>
                        </Link>
                        <Link to="/profile">
                            <ListItem button>
                                <ListItemIcon>
                                    <AccountCircle />
                                </ListItemIcon>
                                <ListItemText primary="Профиль" />
                            </ListItem>
                        </Link>
                        <Link to="/register">
                            <ListItem button>
                                <ListItemIcon>
                                    <AccountCircle />
                                </ListItemIcon>
                                <ListItemText primary="Регистрация" />
                            </ListItem>
                        </Link>
                        <Link to="/login">
                            <ListItem button>
                                <ListItemIcon>
                                    <AccountCircle />
                                </ListItemIcon>
                                <ListItemText primary="Вход" />
                            </ListItem>
                        </Link>
                        <Divider />
                        <Link to="/game">
                            <ListItem button>
                                <ListItemIcon>
                                    <GameIcon />
                                </ListItemIcon>
                                <ListItemText primary="Играть" />
                            </ListItem>
                        </Link>
                        <Link to="/leaderboard">
                            <ListItem button>
                                <ListItemIcon>
                                    <SupervisedUserCircle />
                                </ListItemIcon>
                                <ListItemText primary="Таблица лидеров" />
                            </ListItem>
                        </Link>
                        <Link to="/forum">
                            <ListItem button>
                                <ListItemIcon>
                                    <ForumIcon />
                                </ListItemIcon>
                                <ListItemText primary="Форум" />
                            </ListItem>
                        </Link>
                    </List>
                </Wrapper>
            </Drawer>
        </React.Fragment>
    );
};
