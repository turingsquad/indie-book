import React from "react"
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import {makeStyles} from "@material-ui/core/styles";
import CardActions from '@material-ui/core/CardActions';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    cardHeader : {
        background: '#ffddb0',
        height: 40
    },
    card : {
        height: 100,
        width: 100
    },
    link: {
        color: theme.palette.warning.dark,
        marginRight: theme.spacing(2)
    },
    cardAction : {
        float : 'right'
    }
}));

export default function Recommendation() {
    const classes = useStyles();

    return (
        <Card variant="outlined">
            <CardHeader title="Recommendation" className={classes.cardHeader}/>
            <CardContent>
                <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                    <Card className={classes.card}>
                        <Typography align="center" variant="h5">
                            Book1
                        </Typography>
                    </Card>
                    <Card className={classes.card}>
                        <Typography align="center" variant="h5">
                            Book2
                        </Typography>
                    </Card>
                    <Card className={classes.card}>
                        <Typography align="center" variant="h5">
                            Book3
                        </Typography>
                    </Card>
                </Grid>
                <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                    <Typography variant="body1">
                        Name and Author
                    </Typography>
                    <Typography variant="body1">
                        Name and Author
                    </Typography>
                    <Typography variant="body1">
                        Name and Author
                    </Typography>
                </Grid>
            </CardContent>
            <CardActions className={classes.cardAction}>
                <Link href="#" className={classes.link} variant="body2">
                    View All Recommendations
                </Link>
            </CardActions>
        </Card>
    );
}