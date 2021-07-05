import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { oAuth } from '@slices/auth';
import { Meta } from '@components/meta';
import { Container, Typography, Button } from '@material-ui/core';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

import { Wrapper } from './main.style';

export const Main = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    React.useEffect(() => {
        const code = new URLSearchParams(window.location.search).get('code');

        if (!code) {
            return;
        }

        dispatch(oAuth(code));
    }, [dispatch]);

    const handleRedirect = React.useCallback(() => {
        history.push('/game');
    }, []);

    return (
        <React.Fragment>
            <Meta title="Flappy-Bird" description="Страница приветствия игры Flappy-Bird" />
            <Container maxWidth="sm">
                <Wrapper>
                    <img src="https://filearchive.cnews.ru/img/cnews/2014/02/11/440_7b638.jpg" alt="" />
                    <Typography variant="h6" component="h2">
                        Flappy Bird - это аркадная игра,
                        в которой игроку необходимо сделать так, чтобы маленькая желтая птичка
                        пролетала через множество труб и преодолела при этом множество препятствий.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<SportsEsportsIcon />}
                        onClick={handleRedirect}
                    >
                        Играть
                    </Button>
                </Wrapper>
            </Container>
        </React.Fragment>
    );
};
