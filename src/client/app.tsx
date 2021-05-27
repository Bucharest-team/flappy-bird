import React from 'react';
import { Global } from '@emotion/react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from '@components/navigation';
import { StylesProvider } from '@material-ui/core';

import { checkLogin, isLoggedIn } from '@slices/user';
import { Navigation as NavigationList } from './constants';
import { Game } from './pages/game';
import { Login, Register } from './pages/auth';
import { Profile } from './pages/profile';
import { globalStyles } from './global-styles';

export const App = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(isLoggedIn);

    React.useEffect(() => {
        dispatch(checkLogin());
    }, [dispatch]);

    return (
        <StylesProvider injectFirst>
            <Global styles={globalStyles} />
            <Navigation isAuth={isAuth} />
            <Switch>
                <Route exact path={NavigationList.Game} component={Game} />
                <Route exact path={NavigationList.Login} component={Login} />
                <Route exact path={NavigationList.Register} component={Register} />
                <Route exact path={NavigationList.Profile} component={Profile} />
            </Switch>
        </StylesProvider>
    );
};
