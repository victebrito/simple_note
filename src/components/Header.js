import React from "react";
import style from "./Header.css";

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <a href="/">
                        <span>note</span>
                    </a>
                </div>
                <div className="white_space"></div>
            </div>
        );
    }
}

export default Header;
