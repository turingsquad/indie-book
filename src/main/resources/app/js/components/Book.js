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

let array = ['tag1', 'tag2', 'tag3'];
let chapters = ['Chapter Name #1', 'Chapter Name #2', 'Chapter Name #3'];

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
    const {bookName, author, text} = props;
    return (
        <Container maxWidth="md" className={classes.container}>
            <Card>
                <CardContent>
                    <Typography variant="h3" align="center">
                        {bookName}
                    </Typography>
                    <Grid container direction="row" justify="space-between" alignItems="flex-start">
                        <Grid item>
                        <Typography variant="h4" className={classes.line}>
                            {author}
                        </Typography>
                            </Grid>
                        <Grid item>
                            <ul>
                                {array.map(item => { return <li className="tag"><Chip className={classes.chip} label={item}/></li>;
                                })}
                                </ul>
                        </Grid>
                    </Grid>
                    <Typography variant="h4" align="center" className={classes.line}>
                        Description
                    </Typography>
                    <Typography variant="body1" className={classes.line}>
                        {text}
                    </Typography>
                    <Grid container direction="row" justify="flex-start">
                        <Grid item>
                            <IconButton>
                                <Typography variant="body1" className={classes.num}>
                                    10
                                </Typography>
                                <ThumbUpAltIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton>
                                <Typography variant="body1" className={classes.num}>
                                    2
                                </Typography>
                                <ThumbDownAltIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Typography variant="h4" align="center" className={classes.line}>
                        Chapters
                    </Typography>
                    <ol>
                        {chapters.map(item => {
                            return (
                                <li >
                                    
                                    <div className="chapter">
                                    <Link href="#" variant="h6">
                                        {item}
                                    </Link>
                                        <IconButton>
                                            <Typography variant="body1" className={classes.num}>
                                                6
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