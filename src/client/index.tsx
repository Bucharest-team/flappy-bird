import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@material-ui/core/styles';

import { store as reduxStore } from '../__data__';
import { App } from './app';
import { ThemeContextProvider } from './theme/theme.context.provider';
import { muiTheme } from './theme/theme';

const { store, history } = reduxStore;

const Main = () => {
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.remove();
        }
    }, []);

    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <ThemeProvider theme={muiTheme}>
                    <ThemeContextProvider>
                        <App />
                    </ThemeContextProvider>
                </ThemeProvider>
            </ConnectedRouter>
        </Provider>
    );
};

ReactDOM.hydrate(
    <Main />,
    document.getElementById('root')
);
