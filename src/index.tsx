import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

import { store } from './__data__/store';
import { App } from './app';

ReactDOM.render(
    <Provider store={store}>
        <Global
            styles={css`
                ${emotionNormalize}
            `}
        />
        <App />
    </Provider>,
    document.getElementById('root')
);
