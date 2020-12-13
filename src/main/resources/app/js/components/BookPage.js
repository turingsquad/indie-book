import React from 'react'
import Header from "./header/Header";
import Footer from "./Footer";
import Book from "./Book";

export default function BookPage(props) {
    return (
        <React.Fragment>
            <Header/>
            <Book id={props.match.params.id}/>
            <Footer />
        </React.Fragment>
    )
}