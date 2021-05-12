import React from 'react';
import styled from '@emotion/styled';

import { Form } from '@components/form';
import { register } from '@slices/user';
import { Navigation } from '../../constants';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: calc(100vh - 64px);
`;

export const Register = () => (
    <Wrapper>
        <Form
            fields={[
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
            ]}
            submit={register}
            submitText="Зарегистрироваться"
            link={Navigation.Login}
            linkText="Войти"
            title="Регистрация"
        />
    </Wrapper>
);
