import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {Container} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import {Pagination} from "@material-ui/lab";
import BookItem from "./BookItem";
import constants from "./constants/contants";


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 700,
    },
    list : {
        marginTop: theme.spacing(1)
    }
}));

function getBooksByAuthorId(userId) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", constants.backendHost + "/api/v1/books/" + userId, false);  // synchronous request
    xhr.send(null);
    let json = JSON.parse(xhr.responseText)
    return json
}


export default function AuthorBooksList(props) {
    const {userId} = props;
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const itemsPerPage = 5;
    let books = getBooksByAuthorId(userId);
    const [amountOfPages] = React.useState(
        Math.ceil(books.length / itemsPerPage)
    );

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <Container maxWidth="md" className={classes.list}>
            <Card>
                <CardHeader title={"AuthorName"}/>
                <CardContent>
                    {books
                        .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                        .map(item => {
                            console.log(item);
                            return (
                                <BookItem book={item}/>
                            )
                        })
                    }
                    <Pagination
                        count={amountOfPages}
                        page={page}
                        onChange={handleChange}
                        defaultPage={1}
                    />
                </CardContent>
            </Card>

        </Container>
    );
}