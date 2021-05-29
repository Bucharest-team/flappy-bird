import React from 'react';

import { register } from '@slices/user';
import { Meta } from '@components/meta';
import { withAuthRoute } from '../../hoc/with-auth-route';

import { Form } from './form';
import { Navigation } from '../../constants';
import { Wrapper } from './auth.style';

const FIELDS = [
    {
        name: 'email',
        validation: 'mail',
        error: 'Невалидный email',
        label: 'Почта',
        type: 'text',
    },
    {
        type: 'text',
        name: 'login',
        validation: 'login',
        error: 'Невалидный логин',
        label: 'Логин',
    },
    {
        type: 'text',
        name: 'first_name',
        validation: 'text',
        error: 'Имя содержет недопустимые символы',
        label: 'Имя',
    },
    {
        type: 'text',
        name: 'second_name',
        validation: 'text',
        error: 'Фамилия содержет недопустимые символы',
        label: 'Фамилия',
    },
    {
        type: 'tel',
        name: 'phone',
        validation: 'phone',
        error: 'Телефон набран неправильно',
        label: 'Телефон',
    },
    {
        type: 'password',
        name: 'password',
        validation: 'pass',
        error: 'Слабый пароль',
        label: 'Пароль',
    },
];

export const Register = withAuthRoute(() => (
    <Wrapper>
        <Meta title="Регистрация" description="Страница регистрации" />
        <Form
            fields={FIELDS}
            submit={register}
            submitText="Зарегистрироваться"
            link={Navigation.Login}
            linkText="Войти"
            title="Регистрация"
        />
    </Wrapper>
));
