import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isAuthorized } from '@slices/user';

import { Navigation as NavigationList } from '../constants';

export const withPrivateRoute = (Component: any) => {
    return (props: any) => {
        const isLoggedIn = useSelector(isAuthorized);

        if (isLoggedIn) {
            return <Component {...props} />;
        }

        return <Redirect to={NavigationList.Login} />;
    };
};
