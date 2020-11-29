import React from "react"
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";
import Recommendation from "./Recommendation";
import ContinueReading from "./ContinueReading";
import News from "./News";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    component: {
        marginTop: theme.spacing(3)
    }
}));


export default function MainAfterAuth() {
    const classes = useStyles();
    return (
        <Container className={classes.component}>
            <Grid container lg={12} direction="row" justify="space-between" alignItems="flex-start">
                <Grid item lg={7}>
                    <Recommendation/>
                </Grid>
                <Grid item lg={4}>
                    <ContinueReading/>
                </Grid>
            </Grid>
            <News/>
        </Container>
    );
}