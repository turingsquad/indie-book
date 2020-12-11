import React, {Component} from "react";
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


const sections = [
    new Section("Книги", "/books")
]

class App extends Component {
    render() {
        return (
            <Router>
                <CssBaseline />
                <HeaderAfterAuth title="Indie Book"/>
                <Container>
                    <MainAfterAuth/>
                </Container>
                <Footer/>
                <Switch>
                    <Route path="/f/books">
                        <Books/>
                    </Route>
                    <Route path="/">
                        <Container>
                            <MainAfterAuth/>
                        </Container>
                    </Route>
                    <Route path="/f/book/:id" children={<Book/>}/>
                </Switch>
                <Footer/>
            </Router>
        );
    }

}

export default App;