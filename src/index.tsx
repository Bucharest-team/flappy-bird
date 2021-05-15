import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { StylesProvider } from '@material-ui/core';

import { store } from './__data__/store';
import { App } from './app';

ReactDOM.render(
    <Provider store={store}>
        <StylesProvider injectFirst>
            <Global styles={emotionNormalize} />
            <App />
        </StylesProvider>
    </Provider>,
    document.getElementById('root')
);
