import React from 'react'
import HeaderAfterAuth from "./header/HeaderAfterAuth";
import Footer from "./Footer";
import BookList from "./BookList";
import Header from "./header/Header";

export default function BookListPage() {
    return (
        <React.Fragment>
            <Header/>
            <BookList/>
            <Footer />
        </React.Fragment>
    )
}