import React from 'react';

import { auth } from '@slices/user';
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
        <Form
            fields={FIELDS}
            submit={auth}
            submitText="Авторизоваться"
            link={Navigation.Register}
            linkText="Нет аккаунта?"
            title="Авторизация"
        />
    </Wrapper>
));
