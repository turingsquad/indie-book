import React from "react"
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    cardHeader : {
        background: '#ffddb0',
        height: 40
    },
    cardActions : {
        float: 'right',
    },
    component: {
        marginTop : theme.spacing(3),
        alignItems: 'center'
    },
    button: {
        background: theme.palette.warning.light,
        marginRight: theme.spacing(2)
    },
    card : {
        width: 150,
        height: 150
    }

}));

export default function News() {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.component}>
            <CardHeader title="News" className={classes.cardHeader}/>
            <CardContent>
                <Grid container direction="row" justify="space-evenly" alignItems="flex-start">
                    <Grid item>
                        <Card className={classes.card}>
                            <Typography variant="h3" align="center">
                                Picture
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3" align="center">
                            Book Name
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3" align="center">
                            Description
                        </Typography>
                        <Typography variant="body1" align="center">
                            Description of update
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button variant="contained" size="large" className={classes.button} >Read</Button>
            </CardActions>
        </Card>
    );
}