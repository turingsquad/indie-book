import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    }
}));

export default function SearchField(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search"
                onChange={props.onChange}
            />
            <IconButton className={classes.iconButton} aria-label="search" onClick={props.onClick}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}