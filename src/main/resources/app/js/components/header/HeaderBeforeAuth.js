import React from 'react';
import PropTypes from 'prop-types';
import {fade, makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import {AppBar} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import InputBase from '@material-ui/core/InputBase';
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
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    button: {
        marginLeft: theme.spacing(2),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.20),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.35),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '200px',
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

export default function HeaderBeforeAuth(props) {
    const classes = useStyles();
    const {title} = props;

    return (
        <React.Fragment>
            <AppBar position="static" className={classes.appbar}>
                <Container>
                    <Toolbar>
                        <Grid container direction="row" lg={12} justify="space-around" alignItems="center">
                            <Grid container direction="row" lg={6} justify="flex-start" alignItems="center">
                                <Grid item>
                                <Link component={RouterLink} to={"/"} underline="none" color="inherit">
                                    <Typography
                                        variant="h5"
                                        noWrap
                                        className={classes.toolbarTitle}
                                    >
                                        {title}
                                    </Typography>
                                </Link>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" lg={6} justify="flex-end" alignItems="center">
                                <Grid item>
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                        <SearchIcon/>
                                    </div>
                                    <InputBase
                                        placeholder="Search…"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                    />
                                </div>
                                </Grid>
                                <Grid item>
                                    <Button className={classes.button}
                                            size="small"
                                            to={"/f/signIn"}
                                            color="inherit"
                                            component={RouterLink}
                                    >
                                        Sign in
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button className={classes.button}
                                            variant="outlined"
                                            size="small"
                                            to={"/f/signUp"}
                                            color="inherit"
                                            component={RouterLink}
                                    >
                                        Sign up
                                    </Button>
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