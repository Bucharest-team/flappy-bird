import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container } from '@material-ui/core';
import GradeIcon from '@material-ui/icons/Grade';
import { Meta } from '@components/meta';
import { Backward } from '@components/backward';

import { mockData } from './topics';
import type { IParams, ITopicItem } from './types';
import { Wrapper, Headline, Body, AuthorStyled, RatingButton } from './topics-item.style';
import { Comments } from './comments/comments';

export const TopicsItem = () => {
    const { id } = useParams<IParams>();
    const [topic, setTopic] = React.useState<ITopicItem>();

    React.useEffect(() => {
        // тут запрос
        const item = mockData.find((item) => String(item.id) === id);
        setTopic(item);
    }, [id]);

    const handleChangeRating = React.useCallback(() => {
        // запрос на изменение рейтинга с проверкой на то, что он уже не лайкал
        console.log(1);
    }, []);

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
                        {topic?.date}
                    </Typography>
                    <Body variant="body1" gutterBottom>
                        {topic?.description}
                    </Body>
                    <RatingButton onClick={handleChangeRating} active={false}>
                        <GradeIcon /> {' '} {topic?.rating}
                    </RatingButton>
                </Wrapper>
                <Comments comments={topic?.comments || []} topicId={topic?.id} />
            </Container>
        </Backward>
    );
};
