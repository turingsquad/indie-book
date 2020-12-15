import React from 'react'
import Header from "./header/Header";
import Footer from "./Footer";
import TextEditor from "./TextEditor";

export default function EditorPage(props) {
    return (
        <React.Fragment>
            <Header/>
            <TextEditor bookId={props.location.paramId} bookName={props.location.paramName}/>
            <Footer/>
        </React.Fragment>
    )
}