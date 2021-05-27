import { Navigation } from '../../constants';

export type Inputs = {
    [key: string]: string;
};

export type Field = {
    name: string;
    label: string;
    error: string;
    validation: string;
    type: string;
};

export interface Prop {
    submit: Function;
    title: string;
    submitText: string;
    fields: Array<Field>;
    link: Navigation;
    linkText: string;
}
