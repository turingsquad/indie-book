import React from 'react'
import Text from "./Text";
import ReaderHeader from "./header/ReaderHeader";

export default function ChapterPage(props) {
    return (
        <React.Fragment>
            <ReaderHeader id={props.match.params.id}/>
            <Text id={props.match.params.id}/>
        </React.Fragment>
    )
}