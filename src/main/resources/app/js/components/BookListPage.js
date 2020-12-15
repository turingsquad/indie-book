import React from 'react'
import HeaderAfterAuth from "./header/HeaderAfterAuth";
import Footer from "./Footer";
import BookList from "./BookList";

export default function BookListPage() {
    return (
        <React.Fragment>
            <HeaderAfterAuth title={"Indie Book"} />
            <BookList/>
            <Footer />
        </React.Fragment>
    )
}