import React from "react"
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import {makeStyles} from "@material-ui/core/styles";
import CardActions from '@material-ui/core/CardActions';
import Link from '@material-ui/core/Link';
import BookLink from "./BookLink";

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
    }
}));

function recommendedBooks() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/v1/books/random/" + 3, false);  // synchronous request
    xhr.send(null);
    let json = JSON.parse(xhr.responseText)
    console.log(json)
    return json
}

function findAuthor(userId) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/v1/users/" + userId, false);  // synchronous request
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
                <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                    <Grid item lg={3}>
                        <BookLink author={findAuthor(recommendations[0].authorId).userName} bookName={recommendations[0].name}/>
                    </Grid>
                    <Grid item lg={3}>
                        <BookLink author={findAuthor(recommendations[1].authorId).userName} bookName={recommendations[1].name}/>
                    </Grid>
                    <Grid item lg={3}>
                        <BookLink author={findAuthor(recommendations[2].authorId).userName} bookName={recommendations[2].name}/>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions className={classes.cardAction}>
                <Link href="#" className={classes.link} variant="body2">
                    View All Recommendations
                </Link>
            </CardActions>
        </Card>
    );
}