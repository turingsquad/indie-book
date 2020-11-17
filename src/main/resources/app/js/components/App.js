import React, {Component} from "react";
import Header from "./header/Header";
import Section from "./header/sections"

import '../../styles/App.css';
import Books from "./Books";
import {Route, Router, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import routes from '../common/routerConstants';
import Home from "./Home";

const sections = [
    new Section("Книги", routes.books)
]

class App extends Component {
    render() {
        return (
            <Router history={createBrowserHistory()}>
                <Header title="Indie Book" sections={sections}/>
                <Switch>
                    <Route path={routes.home}>
                        <Home/>
                    </Route>
                    <Route path={routes.books}>
                        <Books/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;