import React from 'react'
import Footer from "./Footer";
import BookList from "./BookList";
import Header from "./header/Header";

export default function BookListPage() {
    return (
        <React.Fragment>
            <Header />
            <BookList/>
            <Footer />
        </React.Fragment>
    )
}