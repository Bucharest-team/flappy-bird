import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '@selectors/user';

export const withAuthRoute = (Component: any) => {
    return (props: any) => {
        const isLogin = useSelector(isLoggedIn);

        if (isLogin) {
            return <Redirect to="/" />;
        }
        return <Component {...props} />;
    };
};
