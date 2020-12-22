import React from 'react'
import {Container, Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import {CardContent, Typography} from "@material-ui/core";
import BookItem from "./BookItem";
import {makeStyles} from "@material-ui/core/styles";
import SearchField from "./SearchField";
import CardHeader from "@material-ui/core/CardHeader";
import Pagination from '@material-ui/lab/Pagination';
import constants from "./constants/contants";

const useStyles = makeStyles((theme) => ({
    list : {
        marginTop: theme.spacing(1)
    },
    item : {
        marginTop: theme.spacing(2)
    },
    search : {
        marginLeft : theme.spacing(2),
        marginTop : theme.spacing(2)
    },
    cardHeader : {
        background: '#ffddb0',
        height: 40
    },
}))

function getBooks() {
    let xhr = new XMLHttpRequest();
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

export default function BookList() {
    const classes=useStyles();
    let books = getBooks();
    return (
        <Container maxWidth="md" className={classes.list}>
            <Card>
                <CardHeader title="Publications" className={classes.cardHeader}/>
                <CardContent>
                    <Grid container direction="column" lg={12} justify="flex-start" alignItems="center">
                        {false && <SearchField className={classes.search} />}
                        <BookItem title={books[0].name} author={findAuthor(books[0].authorId).userName} className={classes.item}/>
                        <BookItem title={books[1].name} author={findAuthor(books[1].authorId).userName} className={classes.item}/>
                        <BookItem title={books[2].name} author={findAuthor(books[2].authorId).userName} className={classes.item}/>
                        {false && <Pagination count={10} className={classes.item}/>}
                    </Grid>

                </CardContent>
            </Card>
        </Container>
    )
}