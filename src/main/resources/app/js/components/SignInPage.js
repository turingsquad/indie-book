import React from 'react'
import SignIn from "./SignIn";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import {Card} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container : {
        marginTop : theme.spacing(2)
    }
}))


export default function SignInPage(props) {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Grid container justify="center" lg={12} alignItems="flex-start">
                <Grid item lg={5}>
                    <Card>
                        <CardContent>
                            <SignIn />
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>

        </Container>



    )
}