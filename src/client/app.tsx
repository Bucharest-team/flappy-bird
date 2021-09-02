import React, { useEffect } from 'react';
import { Global } from '@emotion/react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from '@components/navigation';
import { StylesProvider } from '@material-ui/core';
import { hot } from 'react-hot-loader/root';

import { Wrapper } from '@components/wrapper';
import { isAuthorized } from '@slices/auth';
import { getProfileInfo } from '@slices/profile';
import { globalStyles } from './global-styles';
import routes from './routes';

const Main = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(isAuthorized);

    useEffect(() => {
        dispatch(getProfileInfo());
    }, []);

    return (
        <Wrapper>
            <StylesProvider injectFirst>
                <Global styles={globalStyles} />
                <Navigation isLoggedIn={isLoggedIn} />
                <Switch>
                    {routes.map((route) => (
                        <Route {...route} />
                    ))}
                </Switch>
            </StylesProvider>
        </Wrapper>
    );
};

export const App = hot(Main);
