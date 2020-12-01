import React from 'react';
import Markdown from 'react-remarkable';
import {Container, Typography} from "@material-ui/core";

export default function Text(props) {
    let {title} = props;
    return (
        <Container>
            <Typography variant="h3"> {title} </Typography>
            <Markdown>
                # AAAAA *aa*
            </Markdown>
        </Container>
    )
}