import React, {useEffect, useState} from "react";
import "easymde/dist/easymde.min.css";
import {Container, Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import constants from "./constants/contants";
import {Link as RouterLink} from "react-router-dom";
import Dropdown from 'react-mui-multiselect-dropdown'
import Auth from "./auth/Auth";

const useStyles = makeStyles((theme) => ({
    component: {
        marginTop: theme.spacing(3)
    },
    button : {
        float: 'right',
        background: theme.palette.warning.light,
    },
    error: {
        color: theme.palette.error.dark,
        fontSize: '1em'
    },
    checkBox: {
        color: "red"
    }
}));


function getTags() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", constants.backendHost + "/api/v1/tags", false);  // synchronous request
    xhr.send(null);
    let json = JSON.parse(xhr.responseText)
    console.log(json)
    return json
}

function createBook(name, desc, ...tags) {
    let auth = new Auth()
    if (auth.isAuthenticated()) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", constants.backendHost + "/api/v1/books/new", false);  // synchronous request
        xhr.setRequestHeader(auth.authHeaderName(), auth.getAuthHeader());
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({
            "name": name,
            "description": desc,
            "tagIds": tags[0]
        }))
        return JSON.parse(xhr.responseText)
    }
    return undefined
}

export default function BookCreator() {
    const [bookName, setBookName] = useState("");
    const [description, setDescription] = useState("");
    const[tagList, setTagList] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);


    const handleForm1 = e => {
        setBookName(e.target.value);
    }

    const handleForm2 = e => {
        setDescription(e.target.value);
    }

    const populateData = () => {
        const tags = getTags();
        setTagList(tags);
    }

    useEffect(() => {
        populateData()
    }, [])

    const buttonClick = () => {
        createBook(bookName, description, selectedTags)
    }

    const classes = useStyles();
    //TODO Route to author's books
    return (
        <Container className={classes.component}>
            <Grid container lg={12} direction="row" justify="center" alignItems="center">
                <Grid item lg={4}>
                    <form>
                        <TextField
                            value={bookName}
                            onChange={handleForm1}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="Bookname"
                            name="bookName"
                            label="Book Name"
                        />
                        <TextField
                            value={description}
                            onChange={handleForm2}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            multiline
                            id="Description"
                            name="description"
                            label="Description"
                        />


                    </form>
                    <Dropdown
                        title={"Tags"}
                        data={tagList}
                        fullWidth
                        searchable
                        searchPlaceHolder='search...'
                        itemId='id'
                        itemLabel='name'
                        multiple
                        simpleValue
                        searchByValue='name'
                        itemValue='id'
                        selectedValues={selectedTags}
                        customStyles={{
                            error: classes.error,
                            checkBox: classes.checkBox
                        }}
                        errorText='error'
                        onItemClick={(val) => {
                            setSelectedTags(val);
                            console.log(val);
                        }}
                        showAllButton={false}
                        onDeleteItem={(deleted) => {
                            console.log('deleted', deleted)
                        }}

                    />
                </Grid>
            </Grid>
            <Button variant="contained" size="large" className={classes.button}
                    onClick={buttonClick} component={RouterLink}
                    to={"/f/author/" + new Auth().getCurrentUserId()}>
                Save
            </Button>
        </Container>
    )
}