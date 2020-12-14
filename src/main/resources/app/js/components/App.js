import React, {Component} from "react";
import '../../styles/App.css';
import "easymde/dist/easymde.min.css";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import routes from "../routes";
import Home from "./Home";
import EditorPage from "./EditorPage";
import BookPage from "./BookPage";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import BookListPage from "./BookListPage";
import Text from "./Text";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={routes.mainPage} component={Home}/>
                    <Route exact path={routes.bookPage} component={BookPage}/>
                    <Route exact path={routes.editorPage} component={EditorPage}/>
                    <Route exact path={routes.signIn} component={SignInPage}/>
                    <Route exact path={routes.signUp} component={SignUpPage}/>
                    <Route exact path={routes.books} component={BookListPage}/>
                    <Route exact path={routes.chapterPage} component={Text}/>
                </Switch>
            </Router>
        )
    }

}
export default App;