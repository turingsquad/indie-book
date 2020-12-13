import React, {Component} from "react";
import Section from "./header/sections"
import '../../styles/App.css';
import "easymde/dist/easymde.min.css";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import routes from "../routes";
import Home from "./Home";
import EditorPage from "./EditorPage";
import BookPage from "./BookPage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


const sections = [
    new Section("Книги", "/books")
]


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={routes.mainPage} component={Home}/>
                    <Route exact path={routes.bookPage} component={BookPage}/>
                    <Route exact path={routes.editorPage} component={EditorPage}/>
                    <Route exact path={routes.signIn} component={SignIn}/>
                    <Route exact path={routes.signUp} component={SignUp}/>
                </Switch>
            </Router>
        )
    }

}
export default App;