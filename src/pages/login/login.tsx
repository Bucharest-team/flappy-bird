import React from 'react';
import styled from '@emotion/styled';

import { Form } from '@components/form';
import { Navigation } from '../../constants';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: calc(100vh - 64px);
`;

export const Login = () => (
    <Wrapper>
        <Form
            fields={[
                {
                    name: 'login',
                    label: 'Логин',
                    error: 'Неверно введён логин',
                    validation: 'login',
                    type: 'text',
                },
                {
                    name: 'pass',
                    label: 'Пароль',
                    error: 'Неверно введён пароль',
                    validation: 'pass',
                    type: 'password',
                },
            ]}
            submit={(data: any) => console.log(data)}
            submitText="Авторизоваться"
            link={Navigation.Register}
            linkText="Нет аккаунта?"
            title="Авторизация"
        />
    </Wrapper>
);
