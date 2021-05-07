import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from '@emotion/styled';

import { Form } from '@components/form';
import { auth } from '@slices/user';
import { Navigation } from '../../constants';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: calc(100vh - 64px);
`;

export const Login = () => {
    if (localStorage.getItem('login')) {
        return <Redirect to="/" />;
    }

    return (
        <Wrapper>
            <Form
                fields={[
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
                ]}
                submit={auth}
                submitText="Авторизоваться"
                link={Navigation.Register}
                linkText="Нет аккаунта?"
                title="Авторизация"
            />
        </Wrapper>
    );
};
