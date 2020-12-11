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

export default function Editor() {
    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const[value4, setValue4] = useState("");

    const handleChange = e => {
        setText(e.target.value);
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

    const handleForm4 = e => {
        setValue4(e.target.value);
    }

    const buttonClick = e => {
        console.log(value3);
    }
    const classes = useStyles();

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
                            id="Bookname"
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
                    </form>
                </Grid>
            </Grid>
            <Button variant="contained" size="large" className={classes.button} onClick={buttonClick}>Save</Button>
        </Container>
    )
}