import React, { Component } from "react";
import axios from "axios";

const appTitle = "MLRepo";

class LandingPage extends Component {
  state = {
    requests: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8000/api/v1/mlrequests/")
      .then(res => {
        this.setState({ requests: res.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome to {appTitle}</h1>
          <nav>
            <a href="#about">Algorithms</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        <main>
          <h2>Leading the way in AI accessibility</h2>
          <p>
            {appTitle} is dedicated to advancing human capability by leveraging
            digital intelligence.
          </p>
        </main>
        <footer>
          <p style={{ float: "left" }}>
            {appTitle} &copy; {new Date().getFullYear()}
          </p>
        </footer>
        <div>
          {this.state.requests.map(requests => (
            <p key={requests.id}>{requests.name}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default LandingPage;