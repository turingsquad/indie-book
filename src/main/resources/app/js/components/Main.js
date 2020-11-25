import React from "react"
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    component: {
        marginTop : theme.spacing(3)
    }
}));

export default function Main() {
    const classes = useStyles();
    return (
        <Grid container lg={12} justify="space-around" direction="row" alignItems="flex-start" className={classes.component}>
            <Grid item lg={4}>
                <Grid container direction="column" justify="flex-start" alignItems="center">
                <Grid item>
                <Typography variant="h3">
                    Indie book
                </Typography>
                </Grid>
                    <Grid item>
                        <Typography variant="body1">
                            Read books
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={4}>
                <Grid container direction="column" justify="center" spacing={3}>
                    <Grid item>
                        <Card variant="outlined">
                            <CardContent>
                                <SignIn/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card variant="outlined">
                            <CardContent>
                                <SignUp/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>


        </Grid>
    );
}