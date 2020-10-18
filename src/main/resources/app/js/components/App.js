import React, {Component} from "react";
import editor from "./TextEditor.js"

import '../../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <button name="Edit" onClick={editor.create()}>
                    <h1>Text Editor</h1>
                </button>
            </div>
        );
    }
}

export default App;