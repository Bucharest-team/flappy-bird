import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store as reduxStore } from '../__data__';
import { App } from './app';
import { ThemeContextProvider } from './theme/theme.context.provider';

const { store, history } = reduxStore;

ReactDOM.hydrate(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ThemeContextProvider>
                <App />
            </ThemeContextProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
