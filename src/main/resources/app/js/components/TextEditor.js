import React, {Component, useState} from "react";
import SimpleMDEReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {Container, Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    component: {
        marginTop: theme.spacing(3)
    },
    button : {
        float: 'right',
        background: theme.palette.warning.light,
    }
}));


function addChapter(bookId, chapterName, desc, text) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST",  "/api/v1/books/chapters/new", false)
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
        "bookId": bookId,
        "name": chapterName,
        "text": text,
        "description": desc
    }))
}

export default function TextEditor() {
    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [text, setText] = useState("");

    const handleChange = e => {
        setText(e);
    };

    const handleForm1 = e => {
        setValue(e.target.value);
    }

    const handleForm2 = e => {
        setValue2(e.target.value);
    }

    const handleForm3 = e => {
        setValue3(e.target.value);
    }

    const buttonClick = () => {
        addChapter(1, value3, value2, text);
        console.log(text);
    }
    const classes = useStyles();
    const array = ['table', 'image', 'fullscreen', 'side-by-side']

    return (
        <Container className={classes.component}>
            <Grid container lg={12} direction="row" justify="center" alignItems="center">
                <Grid item lg={4}>
                <form>
                    <TextField
                        value={value}
                        onChange={handleForm1}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="BookName"
                        name="bookName"
                        label="Book Name"
                    />
                    <TextField
                        value={value2}
                        onChange={handleForm2}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        multiline
                        id="Description"
                        name="description"
                        label="Description"
                    />

                    <TextField
                        value={value3}
                        onChange={handleForm3}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="ChapterName"
                        name="chapterName"
                        label="Chapter Name"
                        />

                </form>
                </Grid>
            </Grid>
            <Grid container lg={12} direction="row" justify="center" alignItems="flex-start">
                <Grid item lg={7}>
                    <SimpleMDEReact
                        value={text}
                        onChange={handleChange}
                        options={{
                            hideIcons : array,
                            autoFocus : true,
                            maxHeight : "400px",
                            minHeight : "400px",
                            syncSideBySidePreviewScroll: false
                        }}
                    />
                </Grid>
            </Grid>
            <Button variant="contained" size="large" className={classes.button} onClick={buttonClick}>Save</Button>
        </Container>
    )
}