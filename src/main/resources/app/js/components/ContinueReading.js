import React from "react"
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";
import CardHeader from '@material-ui/core/CardHeader';
import Link from '@material-ui/core/Link';
import CardActions from '@material-ui/core/CardActions';
import BookLink from "./BookLink";
import Auth from "./auth/Auth";


const useStyles = makeStyles((theme) => ({
    cardHeader : {
        background: '#ffddb0',
        height: 40
    },
    link: {
        color: theme.palette.warning.dark,
        marginRight: theme.spacing(2)
    },
    cardAction : {
        float : 'right'
    }
}));

function findAuthor(userId) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/v1/users/" + userId, false);  // synchronous request
    xhr.send(null);
    let json = JSON.parse(xhr.responseText)
    console.log(json)
    return json
}

function findLatest() {
    let auth = new Auth();
    if (auth.isAuthenticated()) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "/api/v1/book/log/latest", false);  // synchronous request
        xhr.setRequestHeader(auth.authHeaderName(), auth.getAuthHeader())
        xhr.send(null);
        let json = JSON.parse(xhr.responseText)
        console.log(json)
        return json
    }
    return null
}


export default function ContinueReading() {
    const classes = useStyles();
    const book = findLatest();
    const auth = new Auth();
    if (!auth.isAuthenticated()) {
        return null
    }
    return (
        <Card variant="outlined">
            <CardHeader title="Continue Reading" className={classes.cardHeader}/>
            <CardContent>
                <Grid container direction="row" justify="space-around" alignItems="center">
                    <BookLink bookName={book.name} author={findAuthor(book.authorId).userName} id={book.id}/>
                </Grid>
            </CardContent>
            <CardActions className={classes.cardAction}>
                <Link href="#" className={classes.link} variant="body2">
                    Read
                </Link>
            </CardActions>
        </Card>
    );
}