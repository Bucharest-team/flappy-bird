import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button, TextField, Input } from '@material-ui/core';
import { Meta } from '@components/meta';
import { withPrivateRoute } from 'client/hoc/with-private-route';
import { Backward } from '@components/backward';

import { createTopic } from '@slices/topics';
import { useHistory } from 'react-router';
import { ICreateTopic } from '../types';
import { Title } from './create-topic.style';

import { Wrapper } from '../../auth/auth.style';
import { WrapperForm, WrapperInput, TitleInput } from '../../auth/form.style';

const CreateTopicInner = () => {
    const { register, handleSubmit } = useForm<ICreateTopic>();
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = React.useCallback((data: ICreateTopic) => {
        dispatch(createTopic(data));
        history.push('/forum');
    }, []);

    return (
        <Backward>
            <Wrapper>
                <Meta title="Создание топика" description="Страница создания топика" />
                <WrapperForm width={800} onSubmit={handleSubmit(onSubmit)}>
                    <Title variant="h4" gutterBottom>
                        Содание топика
                    </Title>
                    <WrapperInput>
                        <Input fullWidth type="text" {...register('title', { required: true })} />
                        <TitleInput>Название топика</TitleInput>
                    </WrapperInput>
                    <WrapperInput>
                        <TextField
                            fullWidth
                            multiline
                            type="text"
                            {...register('description', { required: true })}
                        />
                        <TitleInput>Описание топика</TitleInput>
                    </WrapperInput>
                    <Button type="submit" variant="contained" color="primary">
                        Создать
                    </Button>
                </WrapperForm>
            </Wrapper>
        </Backward>
    );
};

export const CreateTopic = withPrivateRoute(CreateTopicInner);
