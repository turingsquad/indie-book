import React, {Component} from "react";
import Header from "./header/Header";
import Section from "./header/sections"
import '../../styles/App.css';
import "easymde/dist/easymde.min.css";
import Footer from "./Footer";
import Book from "./Book";
import MainAfterAuth from "./MainAfterAuth";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Books from "./Books";
import HeaderAfterAuth from "./header/HeaderAfterAuth";
import TextEditor from "./TextEditor";
import Text from "./Text";
import routes from "../routes";
import Home from "./Home";
import EditorPage from "./EditorPage";
import BookPage from "./BookPage";


const sections = [
    new Section("Книги", "/books")
]


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={routes.mainPage} component={Home} />
                    <Route exact path={routes.bookPage} component={BookPage} />
                    <Route exact path={routes.editorPage} component={EditorPage}/>
                </Switch>
            </Router>
        )
    }

}
export default App;