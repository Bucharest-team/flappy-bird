import React, { FormEvent, useState } from 'react';
import { Container, CssBaseline, makeStyles, TextField } from '@material-ui/core';
import { withPrivateRoute } from '../../hoc/with-private-route';
import { TUpdateUserData, updateUserData } from '@slices/profile';
import { useProfile } from './use-profile';
import Button from "@material-ui/core/Button";
import { NoAvatar } from './profile.style';
import { BASE_RESOURCE_URL } from 'client/constants';

const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
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

    const [state] = useState(useProfile());
    const [first_name, setFirstName] = useState(state.first_name);
    const [second_name, setSecondName] = useState(state.second_name);
    const [display_name, setDisplayName] = useState(state.display_name);
    const [login, setLogin] = useState(state.login);
    const [email, setEmail] = useState(state.email);
    const [phone, setPhone] = useState(state.phone);

    const handleSubmit = React.useCallback(async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const inputs = document.getElementsByTagName('input');
        const data: Record<string, string> = {};

        for (let i = 0; i < inputs.length; i++) {
            data[inputs[i].id] = inputs[i].value;
        }

        try {
            const result = await updateUserData(data as TUpdateUserData);
            setFirstName(result.first_name);
            setSecondName(result.second_name);
            setDisplayName(result.display_name);
            setLogin(result.login);
            setEmail(result.email);
            setPhone(result.phone);
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                {state.avatar ? (
                    <img src={`${BASE_RESOURCE_URL}${state.avatar}`} className={classes.avatar} />
                ) : (
                    <NoAvatar color="primary" fontSize="large" />
                )}
                
                <form onSubmit={handleSubmit}>
                    <TextField id="first_name" margin="normal" required fullWidth label="Имя" value={first_name} 
                        onChange={(event) => setFirstName(event.target.value)} />
                    <TextField id="second_name" margin="normal" required fullWidth label="Фамилия" value={second_name} 
                        onChange={(event) => setSecondName(event.target.value)} />
                    <TextField id="display_name" margin="normal" required fullWidth label="Никнейм" value={display_name} 
                        onChange={(event) => setDisplayName(event.target.value)} />
                    <TextField id="login" margin="normal" required fullWidth label="Логин" value={login} 
                        onChange={(event) => setLogin(event.target.value)} />
                    <TextField id="email" margin="normal" required fullWidth label="Почта" value={email} 
                        onChange={(event) => setEmail(event.target.value)} />
                    <TextField id="phone" margin="normal" required fullWidth label="Телефон" value={phone} 
                        onChange={(event) => setPhone(event.target.value)} />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}> 
                        Применить 
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export const ProfileEdit = withPrivateRoute(ProfileEditInner);
