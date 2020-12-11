import React, {Component} from "react";
import Section from "./header/sections"
import '../../styles/App.css';
import "easymde/dist/easymde.min.css";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
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