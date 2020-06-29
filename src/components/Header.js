import React from "react";
import style from "./Header.css";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <a href="/">
                    <span>note</span>
                </a>
            </div>
        );
    }
}

export default Header;
