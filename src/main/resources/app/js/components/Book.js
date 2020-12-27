import React, {useState} from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import {CardActions, Typography} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import CommentIcon from '@material-ui/icons/Comment';
import Link from "@material-ui/core/Link";
import constants from "./constants/contants";
import Auth from "./auth/Auth";
import {Link as RouterLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';


function findBook(bookId) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", constants.backendHost + "/api/v1/book/" + bookId, false);  // synchronous request
    xhr.send(null);
    let json = JSON.parse(xhr.responseText)
    //console.log(json)
    return json
}

function findAuthor(userId) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", constants.backendHost + "/api/v1/users/" + userId, false);  // synchronous request
    xhr.send(null);
    let json = JSON.parse(xhr.responseText)
    //console.log(json)
    return json
}

function findChapters(bookId) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", constants.backendHost + "/api/v1/books/chapters/" + bookId, false);  // synchronous request
    xhr.send(null);
    let json = JSON.parse(xhr.responseText)
    //console.log(json)
    return json
}

function registerEvent(bookId) {
    let auth = new Auth()
    if (auth.isAuthenticated()) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", constants.backendHost + "/api/v1/book/log/register", false)
        xhr.setRequestHeader(auth.authHeaderName(), auth.getAuthHeader())
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(JSON.stringify({
            bookId: bookId
        }))
    }
}

function isAuthor(userId) {
    let auth = new Auth()
    if (auth.isAuthenticated()) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "/api/v1/book/isAuthor/" + userId, false);  // synchronous request
        xhr.setRequestHeader(auth.authHeaderName(), auth.getAuthHeader())
        xhr.send(null);
        let json = JSON.parse(xhr.responseText)
        //console.log("Response" + json)
        return json
    }
    return false
}

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(3)
    },
    chip: {
        marginLeft: theme.spacing(1)
    },
    line: {
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
    },
    button: {
        marginLeft: theme.spacing(2)
    },
    activeGrading : {
        background: "#3891D9"
    }
}))

function createLike(id) {
    let auth = new Auth()
    let xhr = new XMLHttpRequest();
    xhr.open("PUT", constants.backendHost + "/api/v1/like/" + id, false);  // synchronous request
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader(auth.authHeaderName(), auth.getAuthHeader());
    xhr.send(JSON.stringify({
        bookId: id
    }));
}


function createDislike(id) {
    let auth = new Auth()
    let xhr = new XMLHttpRequest();
    xhr.open("PUT", constants.backendHost + "/api/v1/dislike/" + id, false);  // synchronous request
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader(auth.authHeaderName(), auth.getAuthHeader());
    xhr.send(JSON.stringify({
        bookId: id
    }));
}

function getUserGrade(id) {
    let auth = new Auth()
    let xhr = new XMLHttpRequest();
    xhr.open("GET", constants.backendHost + "/api/v1/rated/" + id, false);  // synchronous request
    xhr.setRequestHeader(auth.authHeaderName(), auth.getAuthHeader());
    xhr.send(null);
    //let json = JSON.parse(xhr.responseText);
    console.log(xhr.responseText);
    return xhr.responseText;
}



export default function Book(props) {
    const classes = useStyles();
    let {id} = props;
    const book = findBook(id);
    const toParams = {
        pathname: "/f/editor",
        paramId: id,
        paramName: book.name
    };

    const isLiked = () => {
        let grade = getUserGrade(id);
        return grade === '"LIKE"';
    }

    const isDisliked = () => {
        let grade = getUserGrade(id);
        return grade === '"DISLIKE"';
    }

    const [like, setLike] = useState(book.likeCount);
    const [likeActive, setLikeActive] = useState(isLiked);
    const [dislike, setDislike] = useState(book.dislikeCount);
    const [dislikeActive, setDislikeActive] = useState(isDisliked);

    const setLikes = () => {
        setLikeActive(!likeActive);
        setLike(likeActive ? like - 1 : like + 1);
    }

    const setDislikes = () => {
        setDislikeActive(!dislikeActive);
        setDislike(dislikeActive ? dislike - 1 : dislike + 1);
    }

    const handleLike = () => {
        if (dislikeActive) {
            setLikes();
            setDislikes();
        }
        setLikes();
        createLike(id);
    }

    const handleDislike = () => {
        if (likeActive) {
            setDislikes();
            setLikes();
        }
        setDislikes();
        createDislike(id);
    }

    registerEvent(id)
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
                            <IconButton onClick={handleLike}>
                                <Typography variant="body1" className={classes.num}>
                                    {like}
                                </Typography>
                                {likeActive ? <ThumbUpAltIcon/> : <ThumbUpOutlinedIcon/>}
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={handleDislike}>
                                <Typography variant="body1" className={classes.num}>
                                    {dislike}
                                </Typography>
                                {dislikeActive ? <ThumbDownAltIcon/> : <ThumbDownAltOutlinedIcon/>}
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Typography variant="h4" align="center" className={classes.line}>
                        Chapters
                    </Typography>
                    <ol>
                        {findChapters(book.id).map(item => {
                            return (
                                <li>
                                    <div className="chapter">
                                    <Link href="#" variant="h6" component={RouterLink} to={"/f/chapter/" + item.id}>
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
                <CardActions>
                    {isAuthor(book.authorId) && <Button className={classes.button} variant="outlined" component={RouterLink}
                                                    to={ toParams }>
                        Create new Chapter
                    </Button>}
                </CardActions>
            </Card>
        </Container>
    )
}