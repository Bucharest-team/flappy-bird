import React from 'react'
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom'

import { Main } from './pages/main'

export const App = () => (
    <ReactRouter>
        <Switch>
            <Route exact path="/" component={Main} />
        </Switch>
    </ReactRouter>
)
