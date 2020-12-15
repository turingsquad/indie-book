import React, {useEffect , useState} from "react";
import SimpleMDEReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {Container, Grid, MenuItem} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
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

function getTagById(tag) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", constants.backendHost + "/api/v1/tags/" + tag, false);  // synchronous request
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
            "description": desc
        }))
    }
}

export default function Editor() {
    const [bookName, setBookName] = useState("");
    const [description, setDescription] = useState("");
    const[tagList, setTagList] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [bookId, setBookId] = useState(0);


    const handleForm1 = e => {
        setBookName(e.target.value);
    }

    const handleForm2 = e => {
        setDescription(e.target.value);
    }

    const handleDelete = chipToDelete => {
        setTagList((chips) =>
            chips.filter((chips) => chips.key !== chipToDelete.key)
        );
    }

    const handleSelect = e => {
        setTagList([...tagList, { id: e.target.value, name: e.target.value }]);
        console.log(e);
    }


    const populateData = () => {
        const tags = getTags();
        setTagList(tags);
    }

    useEffect(() => {
        populateData()
    }, [])

    const buttonClick = () => {
        let book = createBook(bookName, description, selectedTags);
        setBookId(book.id)
    }

    const classes = useStyles();

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
            <Button variant="contained" size="large" className={classes.button} onClick={buttonClick} component={RouterLink} to={"/f/book/" + bookId}>Save</Button>
        </Container>
    )
}