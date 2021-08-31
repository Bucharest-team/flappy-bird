import React from 'react';
import { CardHeader, Typography } from '@material-ui/core';

import { IComment } from '../types';

import { Button, CardContent, CommentStyled, HeaderWrapper, Wrapper } from './comments.style';

type Props = {
    comment: IComment,
    comments: IComment[],
    formRef: { current: HTMLFormElement } | any,
    setPreparedFormData: any
};

export const Comment = ({ comment, comments, formRef, setPreparedFormData }: Props) => {
    const mainComment = comments.find(({ id }) => comment.replayId === id);
    const text = mainComment?.author ? (
        <React.Fragment>
            <b>{mainComment?.author}</b>, {comment.text}
        </React.Fragment>
    ) : comment.text;

    const handleReplyClick = React.useCallback(() => {
        setPreparedFormData({
            replayId: comment.id
        });

        window.scrollTo(0, formRef.current.scrollHeight);

        // грешу, временное решение
        // material ui не ставит реф именно на textarea, там много оберток
        const field = formRef.current.querySelector('textarea');
        field?.focus();
    }, [formRef]);

    return (
        <Wrapper>
            <CommentStyled>
                <HeaderWrapper>
                    <CardHeader title={comment.author} />
                    <Typography variant="caption" display="block" gutterBottom>
                        {comment.date}
                    </Typography>
                </HeaderWrapper>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {text}
                    </Typography>
                    <Button onClick={handleReplyClick} size="small" color="primary">Ответить</Button>
                </CardContent>
            </CommentStyled>
        </Wrapper>
    );
};
