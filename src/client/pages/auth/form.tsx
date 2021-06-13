import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { Inputs, Field, Prop } from './types';

import {
    WrapperForm,
    WrapperInput,
    Title,
    TitleInput,
    ValidInput,
    Input,
    Submit,
    Link,
} from './form.style';
import { OAuth } from './o-auth';

const regularExp = {
    login: /^[a-zA-Z0-9_-]{3,16}$/,
    text: /^[а-яА-Яa-zA-Z0-9]{3,16}$/,
    pass: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,
    phone: /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/,
    mail: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
    all: /\w/,
};

export const Form = ({
    fields,
    submit,
    title,
    submitText,
    link,
    linkText,
}: Prop): JSX.Element => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const dispatch = useDispatch();

    const onSubmit = React.useCallback(
        (data: Inputs) => dispatch(submit(data)),
        [dispatch, submit]
    );

    return (
        <WrapperForm onSubmit={handleSubmit(onSubmit)}>
            <Title>{title}</Title>

            {fields.map((el: Field) => (
                <WrapperInput key={el.name}>
                    <Input
                        type={el.type}
                        typePass={el.type === 'password'}
                        {...register(el.name, {
                            required: true,
                            pattern: regularExp[el.validation],
                        })}
                    />
                    <TitleInput>{el.label}</TitleInput>
                    {errors[el.name] && <ValidInput>{el.error}</ValidInput>}
                </WrapperInput>
            ))}
            <OAuth />
            <Submit type="submit">{submitText}</Submit>
            <Link to={link}>{linkText}</Link>
        </WrapperForm>
    );
};
