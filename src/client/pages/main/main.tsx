import React from 'react';
import { useDispatch } from 'react-redux';

import { oAuth } from '@slices/auth';
import { Meta } from '@components/meta';

export const Main = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        const code = new URLSearchParams(window.location.search).get('code');

        if (!code) {
            return;
        }

        dispatch(oAuth(code));
    }, [dispatch]);

    return (
        <React.Fragment>
            <Meta title="Flappy-Bird" description="Страница приветствия игры Flappy-Bird" />
            <h1>Main Page</h1>
        </React.Fragment>
    );
};
