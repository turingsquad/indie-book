import React from "react";
import {Container, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom';
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
    cardHeader: {
        background: '#ffddb0',
        height: 40
    },
    card : {
        height: 100,
        width: 100
    },
}));

export default function BookLink(props) {
    const classes = useStyles();
    let {bookName, author, id} = props;
    return (
        <Container maxWidth="lg">
            <Grid container direction="row" justify="center" alignItems="flex-start">
                <Link component={RouterLink} to={"/f/book/" + id} underline="none">
                    <Card>
                        <CardContent>
                            <Grid container direction="column" justify="space-between" alignItems="center">
                                <Grid item>
                                    <Typography align="center" variant="h6">
                                        "{bookName}"
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography align="center" variant="body1">
                                        {author}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Link>
            </Grid>
        </Container>
    )
}