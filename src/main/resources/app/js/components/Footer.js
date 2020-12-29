import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import FooterBlock from "./FooterBlock";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '65vh',
        maxHeight: '850vh',
        position: "relative",
        width: "100%"
    },

    footer: {
        position: "absolute",
        width: "100%",
        bottom : 0,
        padding: theme.spacing(1, 0),
        marginTop: 'auto',
        background: "#424242"
    }
}));

const navigationData = [
    {
        name : 'Главная',
        link : '/'
    },
    {
        name : 'Публикации',
        link : '/f/books'
    }
]

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <footer className={classes.footer}>
                <Container>
                    <Grid container lg={12} direction="row" justify="center" alignItems="center">
                        <Grid item lg={3}>
                            <FooterBlock title="Навигация" data={navigationData} />
                        </Grid>
                    </Grid>
                </Container>
            </footer>
        </div>
    );
}