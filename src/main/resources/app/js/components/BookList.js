import React from 'react'
import {Container, Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import {CardContent, Typography} from "@material-ui/core";
import BookItem from "./BookItem";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    list : {
        marginTop: theme.spacing(1)
    },
}))

export default function BookList() {
    const classes=useStyles();
    return (
        <Container className={classes.list}>
                <Grid container direction="column" lg={12} justify="flex-start" alignItems="center">
                    <Grid item lg={4}>
                        <BookItem title="Book" author="author"/>
                    </Grid>
                    <Grid item lg={8} alignItems="stretch">
                        <BookItem title="Book" author="author"/>
                    </Grid>
                </Grid>
        </Container>
    )
}