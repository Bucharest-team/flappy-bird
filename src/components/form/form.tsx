import React from "react";
import { useForm } from "react-hook-form";
import { Navigation } from "../../constants";

import {
  WrapperForm,
  WrapperInput,
  Title,
  TitleInput,
  ValidInput,
  Input,
  Submit,
  Link,
} from "./form.style";

type Inputs = {
  [key: string]: string;
};

const regularExp = {
  login: /^[a-zA-Z0-9_-]{3,16}$/,
  text: /^[а-яА-Яa-zA-Z0-9]{3,16}$/,
  pass: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,
  phone: /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/,
  mail: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
};

type Field = {
  name: string;
  label: string;
  error: string;
  validation: string;
  type: string;
};

interface Prop {
  submit: Function;
  title: string;
  submitText: string;
  fields: Array<Field>;
  link: Navigation;
  linkText: string;
}

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

  const onSubmit = (data: Inputs) => submit(data);

  return (
    <WrapperForm onSubmit={handleSubmit(onSubmit)}>
      <Title>{title}</Title>

      {fields.map((el: Field) => (
        <WrapperInput key={el.name}>
          <Input
            type={el.type}
            typePass={el.type === "password"}
            {...register(el.name, {
              required: true,
              pattern: regularExp[el.validation],
            })}
          />
          <TitleInput>{el.label}</TitleInput>
          {errors[el.name] && <ValidInput>{el.error}</ValidInput>}
        </WrapperInput>
      ))}

      <Submit type="submit">{submitText}</Submit>
      <Link to={link}>{linkText}</Link>
    </WrapperForm>
  );
};
