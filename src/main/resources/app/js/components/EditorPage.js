import React from 'react'
import Header from "./header/Header";
import Footer from "./Footer";
import TextEditor from "./TextEditor";

export default function EditorPage() {
    return (
        <React.Fragment>
            <Header/>
            <TextEditor/>
            <Footer/>
        </React.Fragment>
    )
}