import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const appTitle = "MLRepo";

class Navbar extends Component {
    // set the state of and handle the dark mode toggle
  state = {
    isDarkMode: false,
  };
    
  handleDarkModeToggle = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

    // Render 
    render() {
    const { isDarkMode } = this.state;
    
        return (
            <nav className="nav">
                <Link to="/" className="site-title">
                    Welcome to {appTitle}
                </Link>
                <ul>
                    <Link to="/IncomeClassifier">Income Classifier</Link>
                    <Link to="/About">About</Link>
                    <img
                        src="/dark-mode-icon.png"
                        alt="Toggle Dark Mode"
                        onClick={this.handleDarkModeToggle}
                    />
                </ul>
            </nav>
        );
    }
}

export default Navbar;