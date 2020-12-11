import React from "react";
import Card from "@material-ui/core/Card";
import {CardContent, Typography} from "@material-ui/core";
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import '../../styles/BookItem.css';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

let array = ['tag1', 'tag2', 'tag3'];

const useStyles = makeStyles((theme) => ({
    container : {
        marginRight: theme.spacing(2)
    },
    chip : {
        marginRight: theme.spacing(1)
    }
}))

export default function BookItem(props) {
    const classes = useStyles();
    const {title, author} = props;
    return (
        <Card variant="outlined">
            <CardContent>
                <Grid container direction="column" lg={10}> q
                    <Grid item>
                        <Link href="#" underline="none">
                            <Typography variant="h3">
                                {title}
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" underline="none">
                            <Typography variant="h5">
                                {author}
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                            <Grid item className={classes.container}>
                                <Typography variant="h5">
                                    Tags:
                                </Typography>

                            </Grid>
                            <Grid item>
                                <ul>
                                {array.map(item => {
                                    return <li className="tag"><Chip className={classes.chip} label={item}/></li>;
                                })}
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}