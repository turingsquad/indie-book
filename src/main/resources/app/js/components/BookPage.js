import React from 'react'
import HeaderAfterAuth from "./header/HeaderAfterAuth";
import Footer from "./Footer";
import Book from "./Book";

export default function BookPage(props) {
    return (
        <React.Fragment>
            <HeaderAfterAuth />
            <Book id={props.match.params.id}/>
            <Footer />
        </React.Fragment>
    )
}