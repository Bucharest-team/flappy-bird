import React from 'react';
import { useDispatch } from 'react-redux';

import { oAuth } from '@slices/auth';

export const Main = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        const code = new URLSearchParams(window.location.search).get('code');

        if (!code) {
            return;
        }

        dispatch(oAuth(code));
    }, [dispatch]);

    return <h1>Main Page</h1>;
};
