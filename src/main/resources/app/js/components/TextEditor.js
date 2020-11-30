import React, {Component} from "react";
import SimpleMDE from "react-simplemde-editor";
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

export default function TextEditor() {
    let handleChange = value => {
        this.setState({ mdeValue: value });
    };

    const classes = useStyles();

    const array = ['table', 'image', 'fullscreen', 'side-by-side']

    return (
        <Container className={classes.component}>
            <Grid container lg={12} direction="row" justify="center" alignItems="center">
                <Grid item lg={4}>
                <form>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="Title"
                        name="title"
                        label="Title"
                        />

                </form>
                </Grid>
            </Grid>
            <Grid container lg={12} direction="row" justify="center" alignItems="flex-start">
                <Grid item lg={7}>
                    <SimpleMDE onChange={handleChange}
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
            <Button variant="contained" size="large" className={classes.button}>Save</Button>
        </Container>
    )
}