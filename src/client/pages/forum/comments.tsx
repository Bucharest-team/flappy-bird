import React from 'react';
import { CardHeader, CardContent, Typography } from '@material-ui/core';

import { Headline } from './topic-item.style';
import { ICommentList, IComment } from './types';
import { Wrapper, CommentStyled } from './comments.style';

export const Comments = ({ comments }: ICommentList) => {
    return (
        <React.Fragment>
            <Headline variant="h4">Комментарии</Headline>
            {comments.map((comment: IComment) => (
                <Wrapper>
                    <CardHeader title={comment.author} />
                    <CommentStyled>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {comment.text}
                            </Typography>
                        </CardContent>
                    </CommentStyled>
                </Wrapper>
            ))}
        </React.Fragment>
    );
};
