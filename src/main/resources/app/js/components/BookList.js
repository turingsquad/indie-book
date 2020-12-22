import React, {useState} from "react";
import {CardContent, Container, Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import BookItem from "./BookItem";
import {makeStyles} from "@material-ui/core/styles";
import SearchField from "./SearchField";
import CardHeader from "@material-ui/core/CardHeader";
import Pagination from '@material-ui/lab/Pagination';
import constants from "./constants/contants";
import Button from "@material-ui/core/Button";

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

function getRandom() {
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
    const classes = useStyles();
    const [pageCount, setPageCount] = useState(10);
    const [page, setPage] = useState(1);
    const [namePart, setNamePart] = useState("");
    const [searchResults, setSearchResults] = useState(getRandom());

    const updatePageCount = () => {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", constants.backendHost + "/api/v1/pages", false);  // synchronous request
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({
            "namePart": namePart,
            "page": page
        }));
        const count = xhr.responseText
        setPageCount(count)
    }

    const getBooks = () => {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", constants.backendHost + "/api/v1/search", false);  // synchronous request
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({
            "namePart": namePart,
            "page": page
        }));
        let json = JSON.parse(xhr.responseText)
        console.log(json)
        return json
    }

    const handleSearchChange = (event) => {
        setNamePart(event.target.value)
    }

    const renderResults = () => {

        const renderIfResultsContaining = (number) => {
            if (searchResults.length >= (number + 1)) {
                return (
                    <div>
                        <BookItem title={searchResults[number].name}
                                  author={findAuthor(searchResults[number].authorId).userName}
                                  className={classes.item}/>
                    </div>
                )
            }
            return (
                <div/>
            )
        }

        return (
            <div>
                {renderIfResultsContaining(0)}
                {renderIfResultsContaining(1)}
                {renderIfResultsContaining(2)}
            </div>
        )
    }

    const performSearch = () => {
        updatePageCount()
        const books = getBooks()
        setSearchResults(books)
    }

    const pageChanged = (event, page) => {
        setPage(page)
        performSearch()
    }

    //performSearch()

    return (
        <Container maxWidth="md" className={classes.list}>
            <Card>
                <CardHeader title="Publications" className={classes.cardHeader}/>
                <CardContent>
                    <Grid container direction="column" lg={12} justify="flex-start" alignItems="center">
                        <SearchField className={classes.search} onChange={handleSearchChange}/>
                        <Button variant="contained" size="large" className={classes.button}
                                onClick={performSearch}>
                            Search
                        </Button>
                        {renderResults()}
                        <Pagination count={pageCount} className={classes.item} onChange={pageChanged}/>
                    </Grid>

                </CardContent>
            </Card>
        </Container>
    )
}