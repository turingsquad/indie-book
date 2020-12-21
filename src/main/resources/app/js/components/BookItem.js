import React from "react";
import Card from "@material-ui/core/Card";
import {CardContent, Typography} from "@material-ui/core";
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import '../../styles/BookItem.css';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

let array = ['tag1', 'tag2', 'tag3'];

const useStyles = makeStyles((theme) => ({
    container : {
        marginRight: theme.spacing(2)
    },
    chip : {
        marginRight: theme.spacing(1)
    },
    card : {
        marginTop : theme.spacing(2)
    },
    element : {
        paddingLeft : theme.spacing(1)
    },
    tags: {
        marginTop : theme.spacing(1)
    }

}))


export default function BookItem(props) {
    const classes = useStyles();
    const {title, author} = props;
    return (
        <Container maxWidth="md" className={classes.card}>
            <Card variant="outlined">
                <CardContent>
                    <Grid container direction="row" lg={10}>
                        <Grid item>
                            <Link href="#" underline="none">
                                <Typography variant="h3">
                                    {title}
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item className={classes.element}>
                            <Typography variant="h3">
                                /
                            </Typography>
                        </Grid>
                        <Grid item className={classes.element}>
                            <Link href="#" underline="none">
                                <Typography variant="h3">
                                    {author}
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.tags}>
                        <Grid item>
                            <ul>
                                {array.map(item => {
                                    return <li className="tag"><Chip className={classes.chip} label={item}/></li>;
                                })}
                            </ul>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    )
}