import React from "react";
import "./App.css";

import Header from "./Header.js";
import List from "./List.js";
import Note from "./Note.js";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="white_space"></div>
            <div className="container">
                <List />
                <Note />
            </div>
        </div>
    );
}

export default App;
