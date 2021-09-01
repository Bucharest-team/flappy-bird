import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container } from '@material-ui/core';
import GradeIcon from '@material-ui/icons/Grade';
import { Meta } from '@components/meta';
import { Backward } from '@components/backward';

import { useDispatch, useSelector } from 'react-redux';
import { getCurrentTopic, getTopic } from '@slices/topics';
import { mockData } from './topics';
import type { IParams, ITopicItem } from './types';
import { Wrapper, Headline, Body, AuthorStyled, RatingButton } from './topics-item.style';
import { Comments } from './comments/comments';

export const TopicsItem = () => {
    const { id } = useParams<IParams>();

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getTopic(Number(id)));
    }, [id]);

    const topic = useSelector(getCurrentTopic);
    console.log(topic);

    if (topic === null) {
        return null;
    }

    return (
        <Backward>
            <Container maxWidth="md">
                <Meta title={topic?.title} description={topic?.description} />
                <Wrapper>
                    <Headline variant="h3">{topic?.title}</Headline>
                    <AuthorStyled variant="h6" gutterBottom>
                        Author: {topic?.author}
                    </AuthorStyled>
                    <Typography variant="subtitle2" gutterBottom>
                        {new Date(topic?.createdAt).toDateString()}
                    </Typography>
                    <Body variant="body1" gutterBottom>
                        {topic?.description}
                    </Body>
                </Wrapper>
                <Comments comments={topic?.comments || []} topicId={topic?.id} />
            </Container>
        </Backward>
    );
};
