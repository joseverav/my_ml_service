import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    // Render 
    render() {
        return (
            <nav className="nav">
                <Link to="/" className="site-title">
                    Jose Vera
                </Link>
                <ul>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;