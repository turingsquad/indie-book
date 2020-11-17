import React from 'react';
import {Route, Switch} from 'react-router-dom';
import routes from '../common/routerConstants';
import Home from "../components/Home";
import Books from "../components/Books";

export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path={routes.home}>
                    <Home/>
                </Route>
                <Route path={routes.books}>
                    <Books/>
                </Route>
            </Switch>
        )
    }
}