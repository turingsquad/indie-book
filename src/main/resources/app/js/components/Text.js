import React from 'react';
import Markdown from 'react-remarkable';
import {Container, Typography} from "@material-ui/core";
import constants from "./constants/contants";

function getChapterById(chapterId) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", constants.backendHost + "/api/v1/chapter/" + chapterId, false);  // synchronous request
    xhr.send(null);
    let json = JSON.parse(xhr.responseText)
    console.log(json)
    return json
}

export default function Text(props) {
    let {title} = props;
    return (
        <Container>
            <Typography variant="h3"> {title} </Typography>
            <Markdown>
                {getChapterById(props.match.params.id).text}
            </Markdown>
        </Container>
    )
}