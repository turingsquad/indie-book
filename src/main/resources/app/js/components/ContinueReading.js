import React from "react"
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";
import CardHeader from '@material-ui/core/CardHeader';
import Link from '@material-ui/core/Link';
import CardActions from '@material-ui/core/CardActions';


const useStyles = makeStyles((theme) => ({
    cardHeader : {
        background: '#ffddb0',
        height: 40
    },
    card : {
        width : 125,
        height: 125
    },
    link: {
        color: theme.palette.warning.dark,
        marginRight: theme.spacing(2)
    },
    cardAction : {
        float : 'right'
    }
}));

export default function ContinueReading() {
    const classes = useStyles();

    return (
        <Card variant="outlined">
            <CardHeader title="Continue Reading" className={classes.cardHeader}/>
            <CardContent>
                <Grid container direction="row" justify="space-around" alignItems="center">
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h5" align="center">
                                Your books
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </CardContent>
            <CardActions className={classes.cardAction}>
                <Link href="#" className={classes.link} variant="body2">
                    Read
                </Link>
            </CardActions>
        </Card>
    );
}