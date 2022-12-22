import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
// import img from "../images/mubi1.png";
import img from "../images/mubi2.png";
// import img from "../images/mubi3.png";
// import img from "../images/mubi3.png";

export default class NameImageSec extends Component {
  render() {
    return (
      <React.Fragment>
        <div className=" row align-items-center reverse">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1 className="name">Mubashir Muhammed</h1>
            <p className="">
              As a front-end developer, design and development are very
              important to me. I think my technical expertise and sense of
              aesthetics make me a well-rounded developer who can handle any
              challenge.
            </p>
            <NavLink to="/about" className="main-btn">
              About Me
            </NavLink>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={img} alt="mubi" className="w-100 p-image" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
