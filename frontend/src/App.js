import React, { Component } from "react";
import axios from "axios";
import "./index.css";

const appTitle = "MLRepo";

class LandingPage extends Component {
  state = {
    requests: [],
    isDarkMode: false,
  };

  componentDidMount() {
    axios
      .get("http://localhost:8000/api/v1/mlrequests")
      .then((res) => {
        this.setState({ requests: res.data });
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleDarkModeToggle = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    const lastRequest = this.state.requests[this.state.requests.length - 1];
    const { isDarkMode } = this.state;

    return (
      <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
        <header>
          <h1>Welcome to {appTitle}</h1>
          <div className="nav-container">
            <nav>
              <a href="#incomeclassifier">Income Classifier</a>
              <a href="#contact">Contact</a>
              <img
                src="/dark-mode-icon.png"
                alt="Toggle Dark Mode"
                className="dark-mode-toggle"
                onClick={this.handleDarkModeToggle}
              />
            </nav>
          </div>
        </header>
        <main>
          <h2>Leading the way in AI accessibility</h2>
          <p>
            {appTitle} is dedicated to advancing human capability by leveraging
            digital intelligence.
          </p>
          {lastRequest && (
            <p>
              {" "}
              {lastRequest.id} : {lastRequest.response}
            </p>
          )}
        </main>
        <footer>
          <p>
            {appTitle} &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    );
  }
}

export default LandingPage;


/* Use to render all objects in get request:
{this.state.requests.map((request) => (
  <p key={request.id}>
  {request.response}</p>
))}*/