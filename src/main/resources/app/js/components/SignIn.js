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
    }
}));


export default function SignIn() {
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
                    id="password1"
                    autoComplete="current-password"
                    value={state.getPassword()}
                    onChange={state.handlePasswordChange}
                />
                <Button
                    type="submit"
                    variant="contained"
                    className={classes.submit}
                    onClick={() => {
                        state.signInByState()
                    }}
                    component={RouterLink}
                    to={"/"}
                    href={"/"}
                >
                    Sign In
                </Button>
            </form>
        </Container>
    );
}