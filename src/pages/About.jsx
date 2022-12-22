import React, { Component } from "react";
import ExtraInfo from "../components/ExtraInfo";
import PersonalInfo from "../components/PersonalInfo";

export default class AboutMe extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="inner-head text-center">About Me</h1>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-12">
            <PersonalInfo />
          </div>
          <div className="col-xl-6 col-lg-12">
            <ExtraInfo />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
