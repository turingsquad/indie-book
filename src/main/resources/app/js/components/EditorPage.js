import React from 'react'
import HeaderAfterAuth from "./header/HeaderAfterAuth";
import Footer from "./Footer";
import TextEditor from "./TextEditor";

export default function EditorPage() {
    return (
        <React.Fragment>
            <HeaderAfterAuth />
            <TextEditor />
            <Footer />
        </React.Fragment>
    )
}