import React from 'react';
import { Meta } from '@components/meta';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import GradeIcon from '@material-ui/icons/Grade';

import { Card, RatingStyled, CardActions, Wrapper, Body2, CardContent, Link } from './forum.style';

const mockData = [
    {
        id: 1,
        title: 'Заголовок 1',
        author: 'John Doe',
        description: 'Описание 1',
        rating: 51,
        date: '10.10.2021'
    },
    {
        id: 2,
        title: 'Заголовок 2',
        author: 'John Doe',
        description: 'Описание 2',
        rating: 12,
        date: '10.10.2021'
    },
    {
        id: 3,
        title: 'Заголовок 3',
        author: 'John Doe',
        description: 'Описание 3',
        rating: 0,
        date: '10.10.2021'
    }
];

export const Forum = () => {
    return (
        <React.Fragment>
            <Meta title="Форум" description="Страница форума" />
            <Container maxWidth="md">
                {mockData.map(({ id, author, title, date, description, rating = 0 }) => (
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
                            <Link to="/">Подробнее</Link>
                            <RatingStyled>
                                <Body2 variant="body2">
                                    {date}
                                </Body2>
                                <GradeIcon /> {' '} {rating}
                            </RatingStyled>
                        </CardActions>
                    </Card>
                ))}
            </Container>
        </React.Fragment>
    );
};
