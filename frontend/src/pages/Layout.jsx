import React, { Component } from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import '../index.css';

class Layout extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default Layout;