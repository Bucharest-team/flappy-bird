import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { Container, CssBaseline, makeStyles } from '@material-ui/core';
import { TUpdateUserData, updateAvatar, updateUserData } from '@slices/profile';
import { Redirect } from 'react-router';
import { BASE_RESOURCE_URL } from 'client/constants';
import { useProfile } from '@hooks/use-profile';
import { useDispatch } from 'react-redux';
import { withPrivateRoute } from '../../hoc/with-private-route';

import { CameraIconStyled, NoAvatar } from './profile.style';
import { TextField, Button } from './profile.edit.style';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatarWrapper: {
        cursor: 'pointer',
        position: 'relative'
    },
    avatar: {
        width: '160px',
        height: '160px',
        borderRadius: '16px'
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const ProfileEditInner = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const { first_name, second_name, display_name, login, email, phone, avatar, success } = useProfile();
    const [profile, setProfile] = useState({ first_name, second_name, display_name, login, email, phone });

    const avatarInputRef = useRef<HTMLInputElement>(null);

    const handleClickdAvatar = React.useCallback(() => {
        avatarInputRef.current?.click();
    }, []);

    const handleUploadAvatar = React.useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        if (!files || files.length === 0) return;
        dispatch(updateAvatar(files[0]));
    }, [dispatch]);

    const updateProperty = React.useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const newVal = { ...profile };
        // @ts-ignore
        newVal[event.target.name] = event.target.value;
        setProfile(newVal);
    }, [profile]);

    const handleSubmit = React.useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(updateUserData(profile as TUpdateUserData));
    }, [dispatch, profile]);

    if (success) {
        return <Redirect to="/profile" />;
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <div className={classes.avatarWrapper} onClick={handleClickdAvatar}>
                    {avatar ? (
                        <img src={`${BASE_RESOURCE_URL}${avatar}`} className={classes.avatar} alt="" />
                    ) : (
                        <NoAvatar color="primary" fontSize="large" />
                    )}
                    <CameraIconStyled fontSize="large" />
                </div>

                <input type="file" name="avatar" ref={avatarInputRef} hidden accept="image/*" onChange={handleUploadAvatar} />

                <form onSubmit={handleSubmit}>
                    <TextField name="first_name" margin="normal" required fullWidth label="Имя" value={profile.first_name} onChange={updateProperty} />
                    <TextField name="second_name" margin="normal" required fullWidth label="Фамилия" value={profile.second_name} onChange={updateProperty} />
                    <TextField name="display_name" margin="normal" required fullWidth label="Никнейм" value={profile.display_name} onChange={updateProperty} />
                    <TextField name="login" margin="normal" required fullWidth label="Логин" value={profile.login} onChange={updateProperty} />
                    <TextField name="email" margin="normal" required fullWidth label="Почта" value={profile.email} onChange={updateProperty} />
                    <TextField name="phone" margin="normal" required fullWidth label="Телефон" value={profile.phone} onChange={updateProperty} />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}> Применить </Button>
                </form>
            </div>
        </Container>
    );
};

export const ProfileEdit = withPrivateRoute(ProfileEditInner);
