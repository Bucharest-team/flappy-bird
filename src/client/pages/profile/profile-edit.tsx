import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { Container, CssBaseline, makeStyles, TextField } from '@material-ui/core';
import { withPrivateRoute } from '../../hoc/with-private-route';
import { TUpdateUserData, updateAvatar, updateUserData } from '@slices/profile';
import { useProfile } from './use-profile';
import Button from '@material-ui/core/Button';
import { CameraIconStyled, NoAvatar } from './profile.style';
import { BASE_RESOURCE_URL } from 'client/constants';

const useStyles = makeStyles(theme => ({
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
        borderRadius:'16px'
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
}));

const ProfileEditInner = () => {
    const classes = useStyles();

    const { first_name, second_name, display_name, login, email, phone, avatar } = useProfile();

    const [profile, setProfile] = useState({ first_name, second_name, display_name, login, email, phone });
    const [avatarUrl, setAvatar] = useState(avatar);

    const avatarFormRef = useRef<HTMLFormElement>(null);
    const avatarInputRef = useRef<HTMLInputElement>(null);

    const handleClickdAvatar = React.useCallback(() => {
        avatarInputRef.current?.click();
    }, []);

    const handleUploadAvatar = React.useCallback(async () => {
        try {
            const inputNode = avatarFormRef.current;
            if (!inputNode) return;
            const result = await updateAvatar(new FormData(inputNode));
            setAvatar(result.avatar);
        } catch (err) {
            console.log(err);
        }
    }, [profile]);

    const updateProperty = React.useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const newVal: any = {...profile};
        newVal[event.target.name] = event.target.value;
        setProfile(newVal);
    }, [profile]);
    
    const handleSubmit = React.useCallback(async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        try {
            await updateUserData(profile as TUpdateUserData);
        } catch (err) {
            console.log(err);
        }
    }, [profile]);

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <div className={classes.avatarWrapper} onClick={handleClickdAvatar}>
                    {avatarUrl ? (
                        <img src={`${BASE_RESOURCE_URL}${avatarUrl}`} className={classes.avatar} />
                    ) : (
                        <NoAvatar color="primary" fontSize="large" />
                    )}
                    <CameraIconStyled fontSize="large" />
                </div>

                <form ref={avatarFormRef} encType={'multipart/form-data'}>
                    <input type="file" name="avatar" ref={avatarInputRef} hidden accept="image/*" onChange={handleUploadAvatar} />
                </form>

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
