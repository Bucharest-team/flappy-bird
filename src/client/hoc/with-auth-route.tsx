import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isAuthorized } from '@slices/auth';

export const withAuthRoute = (Component: any) => {
    return (props: any) => {
        const isLoggedIn = useSelector(isAuthorized);

        if (isLoggedIn) {
            return <Redirect to="/" />;
        }
        return <Component {...props} />;
    };
};
