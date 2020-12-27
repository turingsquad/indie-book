import React from 'react';
import Container from "@material-ui/core/Container";
import AuthorBooksList from "./AuthorBooksList";
import Grid from "@material-ui/core/Grid";

export default function AuthorBooks(props) {
    const {id} = props;
    return (
        <Container>
            <Grid container lg={10} justify={"center"}>
                <AuthorBooksList userId={id}/>
            </Grid>
        </Container>
    )
}