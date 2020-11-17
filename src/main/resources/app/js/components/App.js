import React, {Component} from "react";
import Header from "./header/Header";
import Section from "./header/sections"
import '../../styles/App.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Main from "./Main";
import MainWithAuth from "./MainWithAuth";
import HeaderWithAuth from "./header/HeaderWithAuth";

const sections = [
    new Section("Книги", "/books")
]

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Header title="Indie Book"/>
                <Container>
                    <Main/>
                </Container>
            </React.Fragment>
        );
    }
}

export default App;