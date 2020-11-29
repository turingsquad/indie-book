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
}));

export default function Header(props) {
    const classes = useStyles();
    const { title } = props;

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
                        <Button className={classes.button} size="small" color="inherit">Sign in</Button>
                        <Button className={classes.button} variant="outlined" size="small" color="inherit">Sign
                            up</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>
    );
}

Header.propTypes = {
    title: PropTypes.string,
};