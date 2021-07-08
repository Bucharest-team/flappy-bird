import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';

import { Wrapper, WrapperForm, Title } from './form-wrapper.style';

import { Meta } from '../meta';

export const FormWrapper = ({ children, onSubmit, title, submitText }: any) => {
    const { handleSubmit } = useForm<any>();

    return (
        <Wrapper>
            <Meta title={title} />
            <WrapperForm onSubmit={handleSubmit(onSubmit)}>
                <Title variant="h4" gutterBottom>
                    {title}
                </Title>
                {children}
                <Button type="submit" variant="contained" color="primary">
                    {submitText}
                </Button>
            </WrapperForm>
        </Wrapper>
    );
};
