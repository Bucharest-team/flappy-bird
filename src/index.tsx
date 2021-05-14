import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { StylesProvider } from '@material-ui/core';

import { store } from './__data__/store';
import { App } from './app';

const globalStyles = css`
    ${emotionNormalize}
    body {
        font-family: 'Roboto', sans-serif;
    }
`;

ReactDOM.render(
    <Provider store={store}>
        <StylesProvider injectFirst>
            <Global styles={globalStyles} />
            <App />
        </StylesProvider>
    </Provider>,
    document.getElementById('root')
);
