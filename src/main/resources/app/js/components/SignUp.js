import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import State from "./State";
import {Link as RouterLink} from 'react-router-dom';

const styles = makeStyles((theme) => ({
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
                    autoComplete="userName"
                    value={state.getUsername()}
                    onChange={state.handleUsernameChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
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
                    type="password"
                    id="confPassword"
                    autoComplete="conf-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                    onClick={() => {
                        state.signUpByState()
                    }}
                    component={RouterLink}
                    to={"/"}
                    href={"/"}
                >
                    Sign Up
                </Button>
            </form>
        </Container>
    );
}