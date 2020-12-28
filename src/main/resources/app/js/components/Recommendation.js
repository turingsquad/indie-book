import React from "react"
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import {makeStyles} from "@material-ui/core/styles";
import BookLink from "./BookLink";
import constants from "./constants/contants";

const useStyles = makeStyles((theme) => ({
    cardHeader : {
        background: '#ffddb0',
        height: 40
    },
    card: {
        height: 100,
        width: 100
    },
    link: {
        color: theme.palette.warning.dark,
        marginRight: theme.spacing(2)
    },
    cardAction: {
        float: 'right'
    },
    bookLink: {
        marginTop: theme.spacing(1)
    }
}));

function recommendedBooks() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", constants.backendHost + "/api/v1/books/random/" + 3, false);  // synchronous request
    xhr.send(null);
    let json = JSON.parse(xhr.responseText)
    console.log(json)
    return json
}

function findAuthor(userId) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", constants.backendHost + "/api/v1/users/" + userId, false);  // synchronous request
    xhr.send(null);
    let json = JSON.parse(xhr.responseText)
    console.log(json)
    return json
}

export default function Recommendation() {
    const classes = useStyles();
    let recommendations = recommendedBooks();
    return (
        <Card variant="outlined">
            <CardHeader title="Recommendation" className={classes.cardHeader}/>
            <CardContent>
                <Grid container lg={12} md={12} sm={12} direction="row" justify="space-evenly" alignItems="flex-start">
                    <Grid item lg={3} md={3} sm={8} className={classes.bookLink}>
                        <BookLink author={findAuthor(recommendations[0].authorId).userName} bookName={recommendations[0].name} id={recommendations[0].id}/>
                    </Grid>
                    <Grid item lg={3} md={3} sm={8} className={classes.bookLink}>
                        <BookLink author={findAuthor(recommendations[1].authorId).userName} bookName={recommendations[1].name} id={recommendations[1].id}/>
                    </Grid>
                    <Grid item lg={3} md={3} sm={8} className={classes.bookLink}>
                        <BookLink author={findAuthor(recommendations[2].authorId).userName} bookName={recommendations[2].name} id={recommendations[2].id}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}