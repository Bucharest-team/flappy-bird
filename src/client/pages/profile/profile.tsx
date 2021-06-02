import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgress, Container, Divider, Typography } from '@material-ui/core';

import { logout } from '@slices/user';
import { Meta } from '@components/meta';
import { BASE_RESOURCE_URL, Navigation } from '../../constants';
import { withPrivateRoute } from '../../hoc/with-private-route';
import { updateAvatar } from '@slices/profile';
import { useProfile } from './use-profile';
import {
    Wrapper,
    Thumbnail,
    List,
    ListItemText,
    Link,
    Button,
    Buttons,
    NoAvatar,
    AvatarWrapper,
    CameraIconStyled
} from './profile.style';

const ProfileInner = () => {
    const dispatch = useDispatch();
    const { isLoading, avatar, first_name, display_name, second_name, phone, email } = useProfile();
    const [avatarUrl, setAvatar] = useState(avatar);
    
    const handleLogout = React.useCallback(() => {
        dispatch(logout());
        location.href = Navigation.Login;
    }, [dispatch]);

    const handleClickdAvatar = React.useCallback(() => {
        const element: HTMLInputElement | null = document.querySelector('#avatar_input');
        if (!element) return;
        element.click();
    }, []);
    
    const handleUploadAvatar = React.useCallback(async () => {
        try {
            const inputNode: HTMLFormElement | null = document.querySelector('#avatar_form');
            if (!inputNode) return;
            const result = await updateAvatar(new FormData(inputNode));
            setAvatar(result?.avatar);
        } catch (err) {
            console.log(err);
        }
    }, []);

    if (isLoading) {
        return (
            <Wrapper>
                <CircularProgress size={64} />
            </Wrapper>
        );
    }

    return (
        <Container maxWidth="sm">
            <Meta title="Профиль" description="Страница профиля" />
            <Wrapper>
                <AvatarWrapper onClick={handleClickdAvatar}>
                    {avatarUrl || avatar ? (
                        <Thumbnail src={`${BASE_RESOURCE_URL}${!avatarUrl ? avatar : avatarUrl}`} alt="" />
                    ) : (
                        <NoAvatar color="primary" fontSize="large" />
                    )}
                    <CameraIconStyled fontSize="large" />
                    <form id="avatar_form" encType={'multipart/form-data'}>
                        <input type="file" id="avatar_input" name="avatar" hidden accept="image/*" onChange={handleUploadAvatar} />
                    </form>
                </AvatarWrapper>
                <div>
                    <Typography variant="h4" color="inherit" display="block">
                        {first_name}
                    </Typography>
                    <Typography variant="h4" color="inherit" display="block">
                        {second_name}
                    </Typography>
                </div>
            </Wrapper>
            <List>
                <Divider />
                <ListItemText>
                    <span>Никнейм:</span>
                    <span>{display_name}</span>
                </ListItemText>
                <Divider />
                <ListItemText>
                    <span>Почта:</span>
                    <span>{email}</span>
                </ListItemText>
                <Divider />
                <ListItemText>
                    <span>Телефон:</span>
                    <span>{phone}</span>
                </ListItemText>
                <Divider />
            </List>
            <Buttons>
                <Link to="/profile-edit">Редактировать</Link>
                <Button onClick={handleLogout} color="secondary">
                    Выход
                </Button>
            </Buttons>
        </Container>
    );
};

export const Profile = withPrivateRoute(ProfileInner);
