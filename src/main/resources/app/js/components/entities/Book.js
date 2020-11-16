import * as React from "react";


export default class Book extends React.Component {

    constructor(props) {
        super(props);
        this.id = props.id
        this.userId = props.userId
        this.creationDate = props.creationDate
        this.chapterCount = props.chapterCount
    }

    render() {
        return (
            <div>
                <h1>Создали во время {this.creationDate}</h1>
                <p>Тута {this.chapterCount} глав</p>
            </div>
        )
    }
}