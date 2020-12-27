import React, {useState} from "react";
import {CardContent, Container, Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import BookItem from "./BookItem";
import {makeStyles} from "@material-ui/core/styles";
import SearchField from "./SearchField";
import CardHeader from "@material-ui/core/CardHeader";
import Pagination from '@material-ui/lab/Pagination';
import constants from "./constants/contants";
import Dropdown from "react-mui-multiselect-dropdown";

const useStyles = makeStyles((theme) => ({
    list : {
        marginTop: theme.spacing(1)
    },
    item : {
        marginTop: theme.spacing(2)
    },
    search : {
        marginTop : theme.spacing(2)
    },
    cardHeader : {
        background: '#ffddb0',
        height: 40
    },
    error: {
        color: theme.palette.error.dark,
        fontSize: '1em'
    },
    checkBox: {
        color: "red"
    }
}))

function getTags() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", constants.backendHost + "/api/v1/tags", false);  // synchronous request
    xhr.send(null);
    let json = JSON.parse(xhr.responseText)
    return json
}

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
    //console.log(json)
    return json
}

export default function BookList() {
    const classes = useStyles();
    const [pageCount, setPageCount] = useState(10);
    const [page, setPage] = useState(1);
    const [namePart, setNamePart] = useState("");
    const [searchResults, setSearchResults] = useState(getRandom());
    const [tagList, setTagList] = useState(getTags());
    const [selectedTags, setSelectedTags] = useState([]);

    const updatePageCount = (...tags) => {
        let tagIds = getTagIds(tags);
        let xhr = new XMLHttpRequest();
        xhr.open("POST", constants.backendHost + "/api/v1/pages", false);  // synchronous request
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({
            "namePart": namePart,
            "page": page,
            "tagIds": tagIds
        }));
        const count = xhr.responseText
        setPageCount(parseInt(count))
    }

    const getTagIds = (tags) => {
        let tagIds = [];
        for (let i = 0; i < tags[0].length; i++) {
            tagIds.push(tags[0][i].id)
        }
        return tagIds;
    }

    const getBooks = (pageNumber, ...tags) => {
        let tagIds = getTagIds(tags);
        let xhr = new XMLHttpRequest();
        xhr.open("POST", constants.backendHost + "/api/v1/search", false);  // synchronous request
        xhr.setRequestHeader("Content-Type", "application/json");
        if (pageNumber === 0) {
            pageNumber = 1;
            setPage(1);
        }
        xhr.send(JSON.stringify({
            "namePart": namePart,
            "page": pageNumber,
            "tagIds": tagIds
        }));
        let json = JSON.parse(xhr.responseText)
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
                        <BookItem book={searchResults[number]}
                                  author={findAuthor(searchResults[number].authorId)}
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
        updatePageCount(selectedTags);
        const books = getBooks(0, selectedTags);
        setSearchResults(books)
    }

    const pageChanged = (event, newPage) => {
        if (page !== newPage) {
            setPage(newPage)
            const books = getBooks(newPage, selectedTags);
            setSearchResults(books);
        }
    }


    //performSearch()

    return (
        <Container maxWidth="md" className={classes.list}>
            <Card>
                <CardHeader title="Publications" className={classes.cardHeader}/>
                <CardContent>
                    <Grid container direction="row" lg={12}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                        <SearchField className={classes.search} onChange={handleSearchChange} onClick={performSearch}/>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Dropdown
                            className={classes.search}
                            title={"Tags"}
                            fullWidth
                            multiple
                            data={tagList}
                            itemLabel='name'
                            onItemClick={(val) => {
                                setSelectedTags(val);
                                console.log(val);
                            }}
                            selectedValues={selectedTags}
                            customStyles={{
                                error: classes.error,
                                checkBox: classes.checkBox
                            }}
                        />
                        </Grid>
                    </Grid>
                        {renderResults()}
                        <Pagination count={pageCount} page={page} className={classes.item} onChange={pageChanged}/>

                </CardContent>
            </Card>
        </Container>
    )
}