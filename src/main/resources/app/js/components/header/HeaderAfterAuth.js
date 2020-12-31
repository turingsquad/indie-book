import React from 'react';
import PropTypes from 'prop-types';
import {fade, makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {AppBar} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CreateRounded from '@material-ui/icons/CreateRounded';
import {Link as RouterLink} from 'react-router-dom';
import Auth from "../auth/Auth";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
    appbar: {
        background: "#424242"
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
    icon : {
        marginRight : theme.spacing(2),
        marginLeft : theme.spacing(2),
    },
    link: {
        float: "left"
    }
}));

export default function HeaderAfterAuth(props) {
    const classes = useStyles();
    const {title} = props;
    let auth = new Auth();
    let authorId = auth.getCurrentUserId();

    return (
        <React.Fragment>
            <AppBar position="static" className={classes.appbar}>
                <Container>
                    <Toolbar>
                        <Grid container direction="row" lg={12} justify="space-around" alignItems="center">
                            <Grid container direction="row" lg={6} md={5} sm={3} xs={12} justify="flex-start" alignItems="center">
                                <Grid item>
                                    <Button component={RouterLink} to={"/"} underline="none" color="inherit">
                                        <Typography
                                                variant="h5"
                                                noWrap
                                            >
                                                {title}
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" lg={6} md={5} sm={9} xs={12} justify="flex-end" alignItems="center">
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
                                    <Typography
                                        variant="body2"
                                        color="inherit"
                                        noWrap
                                        className={classes.link}
                                    >
                                        <Button color="inherit" component={RouterLink} to={"/f/author/" + authorId}>
                                            My Books
                                        </Button>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <IconButton edge="end" color="inherit" component={RouterLink} to="/f/createBook">
                                        <CreateRounded className={classes.icon}/>
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <Button component={RouterLink} to={"/"} color="inherit" onClick={() => {
                                        new Auth().signOff()
                                    }}>
                                            Sign off
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

HeaderAfterAuth.propTypes = {
    title: PropTypes.string,
};