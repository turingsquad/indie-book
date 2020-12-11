import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import CommentIcon from '@material-ui/icons/Comment';
import Link from "@material-ui/core/Link";
import constants from "./constants/contants";
import {useParams} from "react-router-dom";


function findBook(bookId) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", constants.backendHost + "/api/v1/book/" + bookId, false);  // synchronous request
    xhr.send(null);
    let json = JSON.parse(xhr.responseText)
    console.log(json)
    return json
}

function findAuthor(userId) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", constants.backendHost + "/api/v1/users/" + userId, false);  // synchronous request
    xhr.send(null);
    let json = JSON.parse(xhr.responseText)
    console.log(json)
    return json
}

function findChapters(bookId) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", constants.backendHost + "/api/v1/books/chapters/" + bookId, false);  // synchronous request
    xhr.send(null);
    let json = JSON.parse(xhr.responseText)
    console.log(json)
    return json
}

const useStyles = makeStyles((theme) => ({
    container : {
        marginTop: theme.spacing(2)
    },
    chip : {
        marginLeft: theme.spacing(1)
    },
    line : {
        marginTop: theme.spacing(1)
    },
    num : {
        paddingRight : theme.spacing(1)
    },
    chapterName: {
        marginRight: theme.spacing(1)
    },
    chapterCard: {
        marginTop: theme.spacing(1)
    }
}))

export default function Book(props) {
    const classes = useStyles();
    let {id} = useParams();
    const book = findBook(id);
    return (
        <Container maxWidth="md" className={classes.container}>
            <Card>
                <CardContent>
                    <Typography variant="h3" align="center">
                        {book.name}
                    </Typography>
                    <Grid container direction="row" justify="space-between" alignItems="flex-start">
                        <Grid item>
                            <Typography variant="h5" className={classes.line}>
                            {findAuthor(book.authorId).userName}
                        </Typography>
                            </Grid>
                        <Grid item>
                            <ul>
                                {book.tags.map(item => { return <li className="tag"><Chip className={classes.chip} label={item.name}/></li>;
                                })}
                                </ul>
                        </Grid>
                    </Grid>
                    <Typography variant="h4" align="center" className={classes.line}>
                        Description
                    </Typography>
                    <Typography variant="body1" className={classes.line}>
                        {book.description}
                    </Typography>
                    <Grid container direction="row" justify="flex-start">
                        <Grid item>
                            <IconButton>
                                <Typography variant="body1" className={classes.num}>
                                    {book.likeCount}
                                </Typography>
                                <ThumbUpAltIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton>
                                <Typography variant="body1" className={classes.num}>
                                    {book.dislikeCount}
                                </Typography>
                                <ThumbDownAltIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Typography variant="h4" align="center" className={classes.line}>
                        Chapters
                    </Typography>
                    <ol>
                        {findChapters(2).map(item => {
                            return (
                                <li>
                                    <div className="chapter">
                                    <Link href="#" variant="h6">
                                        {item.name}
                                    </Link>
                                        <IconButton>
                                            <Typography variant="body1" className={classes.num}>
                                                {item.commentCount}
                                            </Typography>
                                            <CommentIcon/>
                                        </IconButton>
                                    </div>
                                </li>
                            )
                        })}
                    </ol>
                </CardContent>
            </Card>
        </Container>
    )
}