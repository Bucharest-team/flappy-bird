import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigation } from '@components/navigation';
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom';

import { checkLogin } from '@slices/user';
import { Navigation as NavigationList } from './constants';
import { Main } from './pages/main';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { withPrivateRoute } from './components/HoC/withPrivateRoute';
import { withAuthRoute } from './components/HoC/withAuthRoute';

export const App = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(checkLogin());
    }, []);

    return (
        <ReactRouter>
            <Navigation />
            <Switch>
                <Route exact path="/" component={withPrivateRoute(Main)} />
                <Route exact path={NavigationList.Login} component={withAuthRoute(Login)} />
                <Route
                    exact
                    path={NavigationList.Register}
                    component={withAuthRoute(Register)}
                />
            </Switch>
        </ReactRouter>
    );
};
