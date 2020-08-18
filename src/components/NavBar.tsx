import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul className="nav-buttons">
                <Link to="/"><li className="nav-button">Home</li></Link>
                <Link to="/posts"><li className="nav-button">Posts</li></Link>
            </ul>
        </nav>
    );
}

export default NavBar;
