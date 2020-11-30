import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import FooterBlock from "./FooterBlock";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '20vh',
        width: "100%",
        bottom : 0
    },
    footer: {
        width: "100%",
        padding: theme.spacing(1, 0),
        marginTop: 'auto',
        background: "#424242"
    }
}));

const navigationData = [
    {
        name : 'Главная',
        link : '#'
    },
    {
        name : 'Люди',
        link : '#'
    },
    {
        name : 'Публикации',
        link : '#'
    }
]

const infoData = [
    {
        name : 'Главная',
        link : '#'
    },
    {
        name : 'Люди',
        link : '#'
    },
    {
        name : 'Публикации',
        link : '#'
    }
]

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <footer className={classes.footer}>
                <Container>
                    <Grid container lg={12} direction="row" justify="space-around" alignItems="flex-start">
                        <Grid item lg={3}>
                            <FooterBlock title="Навигация" data={navigationData} />
                        </Grid>
                        <Grid item lg={3}>
                            <FooterBlock title="Информация" data={infoData}/>
                        </Grid>
                    </Grid>
                </Container>
            </footer>
        </div>
    );
}