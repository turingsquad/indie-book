import React, {Component} from "react";
import editor from "./TextEditor.js"
import Header from "./header/Header";
import Section from "./header/sections"

import '../../styles/App.css';
import Books from "./Books";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import RoutingHeader from "./header/RoutingHeader";

const sections = [
    new Section("Книги", "/books")
]

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <RoutingHeader title="Indie Book" sections={sections}/>
                </Container>
            </React.Fragment>
        );
    }
}

export default App;