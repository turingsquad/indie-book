import * as React from "react";
import Book from "./entities/Book";
import "regenerator-runtime/runtime.js";

function getBooksByUser(userId) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/v1/books/byUser/" + userId, false);  // synchronous request
    xhr.send(null);
    let json = JSON.parse(xhr.responseText)
    console.log(json)
    return json
}

export default class Books extends React.Component {
    render() {
        let bookList = getBooksByUser(1)
        return (
            <React.Fragment>
                <h1>Books</h1>
                {bookList.map((book) => (
                        <Book id={book.id}
                              userId={book.userId}
                              creationDate={book.creationDate}
                              chapterCount={book.chapterCount}/>
                    )
                )
                }
            </React.Fragment>
        )
    }
}