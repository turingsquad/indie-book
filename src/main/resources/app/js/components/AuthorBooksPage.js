import React from 'react';
import Header from "./header/Header";
import Footer from "./Footer";
import AuthorBooksList from "./AuthorBooksList";

export default function AuthorBooksPage(props) {
    return (
        <React.Fragment>
            <Header/>
            <AuthorBooksList userId={props.match.params.id}/>
            <Footer/>
        </React.Fragment>
    )
}