import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Auth from "./auth/Auth";
import State from "./State";


const styles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
        background: theme.palette.warning.light,
    },
    link: {
        marginLeft: theme.spacing(6),
        color: theme.palette.warning.dark,
    }
}));


export default function SignIn() {
    let auth = new Auth();
    let state = new State();
    const classes = styles();
    return (
        <Container>
            <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="userName1"
                    label="User Name"
                    name="userName1"
                    autoComplete="userName"
                    value={state.getUsername()}
                    onChange={state.handleUsernameChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password1"
                    label="Password"
                    type="password"
                    id="password1"
                    autoComplete="current-password"
                    value={state.getPassword()}
                    onChange={state.handlePasswordChange}
                />
                <Button
                    type="submit"
                    variant="contained"
                    className={classes.submit}
                    onClick={state.signInByState}
                >
                    Sign In
                </Button>
            </form>
        </Container>
    );
}