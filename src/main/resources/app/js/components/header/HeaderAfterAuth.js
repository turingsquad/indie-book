import React from 'react';
import PropTypes from 'prop-types';
import {fade, makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {AppBar} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import InputBase from '@material-ui/core/InputBase';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CreateRounded from '@material-ui/icons/CreateRounded';

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
    button : {
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

    return (
        <React.Fragment>
            <AppBar position="static" className={classes.appbar}>
                <Container>
                    <Toolbar>
                        <Typography
                            variant="h5"
                            color="inherit"
                            noWrap
                            className={classes.toolbarTitle}
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="inherit"
                            noWrap
                            className={classes.link}
                        >
                            <Button color="inherit">
                                Article
                            </Button>
                        </Typography>
                        <Typography
                            variant="body2"
                            color="inherit"
                            noWrap
                            className={classes.link}
                        >
                            <Button color="inherit">
                                Authors
                            </Button>
                        </Typography>
                        <IconButton edge="end" color="inherit">
                            <CreateRounded className={classes.icon}/>
                        </IconButton>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                        <IconButton edge="end" color="inherit">
                            Name
                            <AccountCircle className={classes.icon}/>
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>
    );
}

HeaderAfterAuth.propTypes = {
    title: PropTypes.string,
};