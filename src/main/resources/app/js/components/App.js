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
import ChapterPage from "./ChapterPage";
import Editor from "./Editor";
import AuthorBooksPage from "./AuthorBooksPage";

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
                    <Route exact path={routes.chapterPage} component={ChapterPage}/>
                    <Route exact path={routes.bookEditorPage} component={Editor}/>
                    <Route exact path={routes.authorBooks} component={AuthorBooksPage}/>
                </Switch>
            </Router>
        )
    }

}
export default App;