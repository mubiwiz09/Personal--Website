import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="navbar-n">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/works">Works</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </React.Fragment>
    );
  }
}
