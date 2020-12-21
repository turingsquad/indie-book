import React from 'react'
import {Container, Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import {CardContent, Typography} from "@material-ui/core";
import BookItem from "./BookItem";
import {makeStyles} from "@material-ui/core/styles";
import SearchField from "./SearchField";
import CardHeader from "@material-ui/core/CardHeader";
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    list : {
        marginTop: theme.spacing(1)
    },
    item : {
        marginTop: theme.spacing(2)
    },
    search : {
        marginLeft : theme.spacing(2),
        marginTop : theme.spacing(2)
    },
    cardHeader : {
        background: '#ffddb0',
        height: 40
    },
}))

export default function BookList() {
    const classes=useStyles();
    return (
        <Container maxWidth="md" className={classes.list}>
            <Card>
                <CardHeader title="Publications" className={classes.cardHeader}/>
                <CardContent>
                    <Grid container direction="column" lg={12} justify="flex-start" alignItems="center">
                        <SearchField className={classes.search} />
                        <BookItem title="Book" author="author" className={classes.item}/>
                        <BookItem title="Book" author="author" className={classes.item}/>
                        <Pagination count={10} className={classes.item}/>
                    </Grid>

                </CardContent>
            </Card>
        </Container>
    )
}