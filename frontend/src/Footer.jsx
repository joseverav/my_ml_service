import React, { Component } from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";

class Footer extends Component {
    // Render 
    render() {
        return (
            <footer>
            <p>
                Jose Vera &copy; {new Date().getFullYear()}
            </p>
            </footer>
        );
    }
}

export default Footer;