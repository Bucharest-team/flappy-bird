import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container } from '@material-ui/core';
import GradeIcon from '@material-ui/icons/Grade';

import { mockData } from './forum';
import type { IParams, ITopicItem } from './types';
import { Wrapper, Headline, Body, AuthorStyled, RatingButton } from './topic-item.style';
import { Comments } from './comments';

export const TopicItem = () => {
    const { id } = useParams<IParams>();
    const [topic, setTopic] = React.useState<ITopicItem>();

    React.useEffect(() => {
        if (id) {
            // тут запрос
            const item = mockData.find((item) => String(item.id) === id);
            setTopic(item);
        }
    }, [id]);

    const handleChangeRating = React.useCallback(() => {
        // запрос на изменение рейтинга с проверкой на то, что он уже не лайкал
        console.log(1);
    }, []);

    return (
        <Container maxWidth="md">
            <Wrapper>
                <Headline variant="h3">{topic?.title}</Headline>
                <AuthorStyled variant="h6" gutterBottom>
                    Author: {topic?.author}
                </AuthorStyled>
                <Typography variant="subtitle2" gutterBottom>
                    {topic?.date}
                </Typography>
                <Body variant="body1" gutterBottom>
                    {topic?.description}
                </Body>
                <RatingButton onClick={handleChangeRating} active={false}>
                    <GradeIcon /> {' '} {topic?.rating}
                </RatingButton>
            </Wrapper>
            <Comments comments={topic?.comments || []} />
        </Container>
    );
};
