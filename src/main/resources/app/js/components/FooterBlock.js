import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import '../../styles/FooterBlock.css';

const useStyles = makeStyles((theme) => ({
    container : {
        color : "white"
    }
}));


export default function FooterBlock(props) {
    const {title, data} = props;
    const classes = useStyles();


    return (
        <Grid container lg={12} direction="column" justify="space-between" alignItems="center">
            <Grid item>
                <Typography variant="h6" className={classes.container}>{title}</Typography>
            </Grid>
            <ul>
                {data.map(item => {
                    return <li><Link href={item.link} className={classes.container}> {item.name} </Link></li>
                })}
            </ul>
        </Grid>
    )
}
