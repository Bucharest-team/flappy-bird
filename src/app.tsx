import React from 'react';
import { Navigation } from '@components/navigation';
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom';

import { Navigation as NavigationList } from './constants';
import { Main } from './pages/main';
import { Login } from './pages/login';
import { Register } from './pages/register';

export const App = () => (
    <ReactRouter>
        <Navigation />
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path={NavigationList.Login} component={Login} />
            <Route exact path={NavigationList.Register} component={Register} />
        </Switch>
    </ReactRouter>
);
