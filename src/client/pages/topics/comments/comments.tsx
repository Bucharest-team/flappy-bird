import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useProfile } from '@hooks/use-profile';

import { useDispatch } from 'react-redux';
import { createComments } from '@slices/topics';
import { WrapperForm, WrapperInput, TitleInput } from '../../auth/form.style';

import { Headline } from '../topics-item.style';
import { ICommentList, IComment } from '../types';
import { Comment } from './comment';

export const Comments = ({ comments, topicId }: ICommentList) => {
    const dispatch = useDispatch();
    const profile = useProfile();
    const { register, handleSubmit, reset } = useForm();
    const formRef = React.useRef();
    const [preparedFormData, setPreparedFormData] = React.useState({});

    const onSubmit = React.useCallback(
        (data) => {
            const obj = {
                replayId: preparedFormData?.replayId || null,
                author: profile.first_name,
                topicId,
                text: data?.text
            };
            dispatch(createComments(obj));
            reset(data);
        },
        [profile]
    );

    return (
        <React.Fragment>
            <Headline variant="h4">Комментарии</Headline>
            {comments.map((comment: IComment) => (
                <Comment
                    formRef={formRef}
                    comment={comment}
                    comments={comments}
                    setPreparedFormData={setPreparedFormData}
                />
            ))}
            <WrapperForm width={912} onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                <WrapperInput>
                    <TextField
                        fullWidth
                        multiline
                        type="text"
                        {...register('text', { required: true })}
                    />
                    <TitleInput>Оставить комментарий</TitleInput>
                </WrapperInput>
                <Button type="submit" variant="contained" color="primary">
                    Отправить
                </Button>
            </WrapperForm>
        </React.Fragment>
    );
};

Comments.defalutProps = {
    comments: []
};
