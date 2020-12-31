import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {AppBar} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: "#424242"
    },
    toolbarTitle: {
        flex: 1,
    },
    button: {
        marginLeft: theme.spacing(2),
    }
}));

export default function HeaderBeforeAuth(props) {
    const classes = useStyles();
    const {title} = props;

    return (
        <React.Fragment>
            <AppBar position="static" className={classes.appbar}>
                <Container>
                    <Toolbar>
                        <Grid container direction="row" lg={12} sm={12} justify="space-around" alignItems="center">
                            <Grid container direction="row" lg={6} md={5} sm={3} xs={3} justify="flex-start" alignItems="center">
                                <Grid item>
                                    <Button component={RouterLink} to={"/"} underline="none" color="inherit">
                                        <Typography
                                            variant="h5"
                                            noWrap
                                            className={classes.toolbarTitle}
                                        >
                                            {title}
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" lg={6} md={5} sm={9} xs={9} justify="flex-end" alignItems="center">
                                <Grid item>
                                    <Typography
                                        variant="body2"
                                        color="inherit"
                                        noWrap
                                        className={classes.link}
                                    >
                                        <Button color="inherit" component={RouterLink} to="/f/books">
                                            Publications
                                        </Button>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Link component={RouterLink} to={"/f/signIn"} underline="none" color="inherit">
                                        <Button color="inherit" className={classes.button} size="small" >Sign in</Button>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link component={RouterLink} to={"/f/signUp"} underline="none" color="inherit">
                                        <Button color="inherit" className={classes.button} variant="outlined" size="small"
                                        >
                                            Sign up
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>
    );
}

HeaderBeforeAuth.propTypes = {
    title: PropTypes.string,
};