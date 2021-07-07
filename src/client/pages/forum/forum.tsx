import React from 'react';
import { Meta } from '@components/meta';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import GradeIcon from '@material-ui/icons/Grade';

import { Card, RatingStyled, CardActions, Wrapper, Body2, CardContent, Link } from './forum.style';

export const mockData = [
    {
        id: 1,
        title: 'Заголовок 1',
        author: 'John Doe',
        description: 'Описание 1',
        rating: 51,
        date: '10.10.2021',
        comments: [
            {
                id: 1,
                text: 'Первый комментарий',
                rating: 1,
                author: 'Джонни'
            },
            {
                id: 2,
                text: 'Второй комментарий',
                rating: 2,
                author: 'Джонни'
            }
        ]
    },
    {
        id: 2,
        title: 'Заголовок 2',
        author: 'John Doe',
        description: 'Описание 2',
        rating: 12,
        date: '10.10.2021',
        comments: []
    },
    {
        id: 3,
        title: 'Заголовок 3',
        author: 'John Doe',
        description: 'Описание 3',
        rating: 0,
        date: '10.10.2021',
        comments: []
    }
];

export const Forum = () => {
    return (
        <React.Fragment>
            <Meta title="Форум" description="Страница форума" />
            <Container maxWidth="md">
                {mockData.map(({ id, author, title, date, description, rating }) => (
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
                            <Typography color="textSecondary">
                                {description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/forum/${id}`}>Подробнее</Link>
                            <RatingStyled>
                                <Body2 variant="body2">
                                    {date}
                                </Body2>
                                <GradeIcon /> {' '} {rating || 0}
                            </RatingStyled>
                        </CardActions>
                    </Card>
                ))}
            </Container>
        </React.Fragment>
    );
};
