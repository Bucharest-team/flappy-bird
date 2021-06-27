import React from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import GameIcon from '@material-ui/icons/SportsEsports';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { ListItemIcon, ListItemText, Divider, List } from '@material-ui/core';

import { Wrapper, Link, DrawerStyled, ListItem } from './navigation.style';
import type { DrawerProps } from './types';

export const Drawer = ({ isLoggedIn, toggleMenu, toggleDrawer }: DrawerProps) => {
    return (
        <DrawerStyled open={toggleMenu} onClose={toggleDrawer}>
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
                    {isLoggedIn && (
                        <Link to="/profile">
                            <ListItem button>
                                <ListItemIcon>
                                    <AccountCircle />
                                </ListItemIcon>
                                <ListItemText primary="Профиль" />
                            </ListItem>
                        </Link>
                    )}
                    {!isLoggedIn && (
                        <React.Fragment>
                            <Link to="/register">
                                <ListItem button>
                                    <ListItemIcon>
                                        <VpnKeyIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Регистрация" />
                                </ListItem>
                            </Link>
                            <Link to="/login">
                                <ListItem button>
                                    <ListItemIcon>
                                        <ExitToAppIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Вход" />
                                </ListItem>
                            </Link>
                        </React.Fragment>
                    )}
                    <Divider />
                    <Link to="/game">
                        <ListItem button>
                            <ListItemIcon>
                                <GameIcon />
                            </ListItemIcon>
                            <ListItemText primary="Играть" />
                        </ListItem>
                    </Link>
                    {isLoggedIn && (
                        <Link to="/leaderboard">
                            <ListItem button>
                                <ListItemIcon>
                                    <SupervisedUserCircle />
                                </ListItemIcon>
                                <ListItemText primary="Таблица лидеров" />
                            </ListItem>
                        </Link>
                    )}
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
        </DrawerStyled>
    );
};
