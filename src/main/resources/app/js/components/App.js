import React, {Component} from "react";
import Header from "./header/Header";
import Section from "./header/sections"
import '../../styles/App.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import "easymde/dist/easymde.min.css";
import Footer from "./Footer";
import Book from "./Book";
import MainAfterAuth from "./MainAfterAuth";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Books from "./Books";
import HeaderAfterAuth from "./header/HeaderAfterAuth";
import TextEditor from "./TextEditor";
import Text from "./Text";


const sections = [
    new Section("Книги", "/books")
]

class App extends Component {
    render() {
        return (
            <Router>
            <React.Fragment>
                <CssBaseline />
                <HeaderAfterAuth title="Indie Book"/>
                <Container>
                    <MainAfterAuth/>
                </Container>
                <Footer/>
            </React.Fragment>
                <Switch>
                    <Route path="/f/books">
                        <Books/>
                    </Route>
                    <Route path="/f/home">
                        <MainAfterAuth/>
                    </Route>
                </Switch>
            </Router>
        );
    }

}

export default App;