import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./Header";
import Link from "@material-ui/core/Link";
import Books from "../Books";

export default class RoutingHeader extends React.Component{
    constructor(props) {
        super(props);
        this.title = props.title
        this.sections = props.sections
    }
    render() {
        return(
            <Router>
                <Header title={this.title} sections={this.sections}/>
                <Switch>
                    <Route path="/books">
                        <Books/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}