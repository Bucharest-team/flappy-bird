import React from 'react';
import { Global } from '@emotion/react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigation } from '@components/navigation';
import { NotFoundPage } from '@components/404';
import { StylesProvider } from '@material-ui/core';
import { hot } from 'react-hot-loader/root';

import { isAuthorized } from '@slices/auth';
import { Navigation as NavigationList } from './constants';
import { Game } from './pages/game';
import { Login, Register } from './pages/auth';
import { Profile } from './pages/profile';
import { globalStyles } from './global-styles';
import { ProfileEdit } from './pages/profile/profile-edit';
import { Leaderboard } from './pages/leaderboard';
import { Main } from './pages/main';

const MainApp = () => {
    const isLoggedIn = useSelector(isAuthorized);

    return (
        <StylesProvider injectFirst>
            <Global styles={globalStyles} />
            <Navigation isLoggedIn={isLoggedIn} />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path={NavigationList.Game} component={Game} />
                <Route exact path={NavigationList.Login} component={Login} />
                <Route exact path={NavigationList.Register} component={Register} />
                <Route exact path={NavigationList.Profile} component={Profile} />
                <Route exact path={NavigationList.ProfileEdit} component={ProfileEdit} />
                <Route exact path={NavigationList.Leaderboard} component={Leaderboard} />
                <Route exact path="*" component={NotFoundPage} />
            </Switch>
        </StylesProvider>
    );
};

export const App = hot(MainApp);
