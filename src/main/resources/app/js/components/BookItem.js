import React from "react";
import Card from "@material-ui/core/Card";
import {CardContent} from "@material-ui/core";
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import '../../styles/BookItem.css';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    chip : {
        marginRight: theme.spacing(1)
    },
    card : {
        marginTop : theme.spacing(2)
    },
    tags: {
        marginTop : theme.spacing(1)
    },
    link: {
        color: '#212121'
    }

}))

export default function BookItem(props) {
    const classes = useStyles();
    const {book, author} = props;
    return (
        <Container maxWidth="md" className={classes.card}>
            <Card variant="outlined">
                <CardContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Link component={RouterLink} to={"/f/book/" + book.id} underline="none" variant={"h5"} className={classes.link}>
                                {book.name}
                            </Link>
                        </Grid>
                        {author !== undefined && <Grid item>
                            <Link component={RouterLink} to={"/f/author/" + book.authorId} underline="none" variant="h6" className={classes.link}>
                                {author.userName}
                            </Link>
                        </Grid> }
                    </Grid>
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.tags}>
                        <Grid item>
                            <ul>
                                {book.tags.map(item => {
                                    return <li className="tag"><Chip className={classes.chip} label={item.name}/></li>;
                                })}
                            </ul>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    )
}