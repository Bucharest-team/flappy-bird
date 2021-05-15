import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigation } from '@components/navigation';
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom';

import { checkLogin } from '@slices/user';
import { Navigation as NavigationList } from './constants';
import { Main } from './pages/main';
import { Login, Register } from './pages/auth';

export const App = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(checkLogin());
    }, []);

    return (
        <ReactRouter>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path={NavigationList.Login} component={Login} />
                <Route exact path={NavigationList.Register} component={Register} />
            </Switch>
        </ReactRouter>
    );
};
