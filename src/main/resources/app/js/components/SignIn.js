import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
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
    const classes = useStyles();

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
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Link className={classes.link} href="#" variant="body2">
                        Forgot password?
                    </Link>

                </form>
        </Container>
    );
}