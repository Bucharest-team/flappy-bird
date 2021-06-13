import React from 'react';

import { Meta } from '@components/meta';
import { login } from '@slices/auth';
import { withAuthRoute } from '../../hoc/with-auth-route';

import { Form } from './form';
import { Navigation } from '../../constants';
import { Wrapper } from './auth.style';

const FIELDS = [
    {
        name: 'login',
        label: 'Логин',
        error: 'Неверно введён логин',
        validation: 'all',
        type: 'text',
    },
    {
        name: 'password',
        label: 'Пароль',
        error: 'Неверно введён пароль',
        validation: 'all',
        type: 'password',
    },
];

export const Login = withAuthRoute(() => (
    <Wrapper>
        <Meta title="Логин" description="Страница логина" />
        <Form
            fields={FIELDS}
            submit={login}
            submitText="Авторизоваться"
            link={Navigation.Register}
            linkText="Нет аккаунта?"
            title="Авторизация"
        />
    </Wrapper>
));
