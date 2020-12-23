import React from 'react';
import Header from "./header/Header";
import AuthorBooks from "./AuthorBooks";
import Footer from "./Footer";

export default function AuthorBooksPage(props) {
    return (
        <React.Fragment>
            <Header/>
            <AuthorBooks id={props.match.params.id}/>
            <Footer/>
        </React.Fragment>
    )
}