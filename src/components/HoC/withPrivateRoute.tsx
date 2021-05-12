import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '@selectors/user';

import { Navigation as NavigationList } from '../../constants';

export const withPrivateRoute = (Component: any) => {
    return (props: any) => {
        const isLogin = useSelector(isLoggedIn);

        if (isLogin) {
            return <Redirect to={NavigationList.Login} />;
        }
        return <Component {...props} />;
    };
};
