import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const appTitle = "MLRepo";

class Footer extends Component {
    // set the state of and handle the dark mode toggle

    
    // Render 
    render() {
        return (
            <footer>
            <p>
                {appTitle} &copy; {new Date().getFullYear()}
            </p>
            </footer>
        );
    }
}

export default Footer;