import React from 'react';
import {AppBar} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import {makeStyles} from "@material-ui/core/styles";
import constants from "../constants/contants";
import {Link as RouterLink} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
   appbar: {
       background: "white"
   },
    button : {
       marginLeft: theme.spacing(2)
    }
}))

function getChapterById(chapterId) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", constants.backendHost + "/api/v1/chapter/" + chapterId, false);  // synchronous request
    xhr.send(null);
    let json = JSON.parse(xhr.responseText)
    console.log(json)
    return json
}

export default function ReaderHeader(props) {
    const classes = useStyles();
    let {id} = props;
    return (
        <AppBar position="sticky" className={classes.appbar}>
            <Toolbar>
                <Button variant="outlined" size="large" className={classes.button} component={RouterLink} to={"/f/book/" + getChapterById(id).bookId}>
                    Back to book
                </Button>
                <Button variant="outlined" size="large" className={classes.button} component={RouterLink} to={"/"}>
                    Go to main
                </Button>
            </Toolbar>
        </AppBar>
    )
}