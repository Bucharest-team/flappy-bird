import React, { useEffect } from 'react';
import { Meta } from '@components/meta';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import GradeIcon from '@material-ui/icons/Grade';
import { useSelector, useDispatch } from 'react-redux';
import { isAuthorized } from '@slices/auth';

import { Backward } from '@components/backward';

import { getAllTopics, getTopics } from '@slices/topics';
import {
    Card,
    RatingStyled,
    CardActions,
    Wrapper,
    Body2,
    CardContent,
    Link,
    CreateTopicWrapper
} from './topics.style';

export const Topics = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(isAuthorized);
    const topics = useSelector(getTopics);

    useEffect(() => {
        dispatch(getAllTopics());
    }, []);

    return (
        <Backward text="На главную">
            <Meta title="Форум" description="Страница форума" />
            <Container maxWidth="md">
                {isLoggedIn && (
                    <CreateTopicWrapper>
                        <Link to="/create-topic">Создать топик</Link>
                    </CreateTopicWrapper>
                )}
                {topics.map(({ id, author, title, createdAt, description, rating }) => (
                    <Card key={id}>
                        <CardContent>
                            <Wrapper>
                                <Typography variant="h5" component="h3">
                                    {title}
                                </Typography>
                                <Typography variant="h6" component="h5">
                                    {author}
                                </Typography>
                            </Wrapper>
                            <Typography color="textSecondary">{description}</Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/forum/${id}`}>Подробнее</Link>
                            <RatingStyled>
                                <Body2 variant="body2">{new Date(createdAt).toDateString()}</Body2>
                                {/* <GradeIcon /> {rating || 0} */}
                            </RatingStyled>
                        </CardActions>
                    </Card>
                ))}
            </Container>
        </Backward>
    );
};
