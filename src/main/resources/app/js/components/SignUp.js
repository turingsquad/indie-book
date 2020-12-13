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
}));

export default function SignUp() {
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
                    id="userName2"
                    label="User Name"
                    name="userName2"
                    autoComplete="userName"
                    value={state.getUsername()}
                    onChange={state.handleUsernameChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password2"
                    label="Password"
                    type="password"
                    id="password2"
                    autoComplete="current-password2"
                    value={state.getPassword()}
                    onChange={state.handlePasswordChange}
                />
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="confPassword"
                    label="Confirm password"
                    type="confPassword"
                    id="confPassword"
                    autoComplete="conf-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    onClick={state.signUpByState}
                >
                    Sign Up
                </Button>
            </form>
        </Container>
    );
}