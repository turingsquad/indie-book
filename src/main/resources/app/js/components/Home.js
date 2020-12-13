import React from 'react'
import Header from "./header/Header";
import MainAfterAuth from "./MainAfterAuth";
import Footer from "./Footer";

export default function Home() {
    return (
        <React.Fragment>
            <Header/>
            <MainAfterAuth/>
            <Footer/>
        </React.Fragment>
    )
}