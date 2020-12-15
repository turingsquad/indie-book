import React from 'react';
import Markdown from 'react-remarkable';
import {Container, Typography} from "@material-ui/core";
import constants from "./constants/contants";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        marginBottom: theme.spacing(2)
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

function getBookById(bookId) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", constants.backendHost + "/api/v1/book/" + bookId, false);  // synchronous request
    xhr.send(null);
    let json = JSON.parse(xhr.responseText)
    console.log(json)
    return json
}

export default function Text(props) {
    let {id} = props;
    let chapter = getChapterById(id);
    const classes = useStyles();
    return (
        <Container>
            <Typography variant="h3" align="center" className={classes.title}>{getBookById(chapter.bookId).name}</Typography>
            <Typography variant="h4" align="center" className={classes.title}> {chapter.name} </Typography>
            <Markdown>
                {chapter.text}
            </Markdown>
        </Container>
    )
}