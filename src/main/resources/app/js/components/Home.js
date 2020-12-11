import React from 'react'
import HeaderAfterAuth from "./header/HeaderAfterAuth";
import MainAfterAuth from "./MainAfterAuth";
import Footer from "./Footer";

export default function Home() {
    return (
        <React.Fragment>
            <HeaderAfterAuth />
            <MainAfterAuth />
            <Footer />
        </React.Fragment>
    )
}