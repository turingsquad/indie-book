import React from 'react'
import Header from "./header/Header";
import Footer from "./Footer";
import BookCreator from "./BookCreator";


export default function CreateBookPage() {
    return (
        <React.Fragment>
            <Header/>
            <BookCreator/>
            <Footer/>
        </React.Fragment>
    )
}