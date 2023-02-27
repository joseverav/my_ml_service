import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import IncomeClassifier from "./pages/IncomeClassifier";
import About from "./pages/About";

// Make views
const appTitle = "MLRepo";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="IncomeClassifier" element={<IncomeClassifier />} />
            <Route path="About" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

//   render() {
//     const lastRequest = this.state.requests[this.state.requests.length - 1];
//     const { isDarkMode } = this.state;

//     return (
//       <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
//         <header>
//           <h1>Welcome to {appTitle}</h1>
//           <div className="nav-container">
//             <nav>
//               <a href="#incomeclassifier">Income Classifier</a>
//               <a href="#contact">Contact</a>
//               <img
//                 src="/dark-mode-icon.png"
//                 alt="Toggle Dark Mode"
//                 className="dark-mode-toggle"
//                 onClick={this.handleDarkModeToggle}
//               />
//             </nav>
//           </div>

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
