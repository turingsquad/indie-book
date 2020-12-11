import React from "react";
import {Container, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom';

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
        <Container>
            <Grid container direction="row" justify="center" alignItems="flex-start">
                <Link component={RouterLink} to={"/f/book/" + id} underline="none">
                    <Card className={classes.card}>
                        <Typography align="center" variant="h5">
                            {author}
                        </Typography>
                    </Card>
                </Link>
                <Typography align="center">
                    {bookName}
                </Typography>
            </Grid>
        </Container>
    )
}