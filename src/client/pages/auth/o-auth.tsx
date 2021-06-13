import React from 'react';
import { useDispatch } from 'react-redux';
import { oAuthServiceId } from '@slices/auth';

import yandexLogo from '../../../../static/assets/logo.png';
import { OAuthButton } from './form.style';

export const OAuth = () => {
    const dispatch = useDispatch();

    const handleOAuthServiceId = React.useCallback(() => {
        dispatch(oAuthServiceId());
    }, [dispatch]);

    return (
        <OAuthButton onClick={handleOAuthServiceId}>
            <img src={yandexLogo} alt="Авторизоваться" />
        </OAuthButton>
    );
};
