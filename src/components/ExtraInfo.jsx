import React, { Component } from "react";

export default class ExtraInfo extends Component {
  render() {
    return (
      <React.Fragment>
        <div className=" row extra-info g-lg-4 g-4 pt-xl-0 pt-lg-4 pt-4">
          <div className="col-sm-6 col-6 main-div">
            <div className="inner-div">
              <h3>1.5+</h3>
              <span>
                YEARS OF
                <br />
                EXPERIENCE
              </span>
              <p></p>
            </div>
          </div>
          <div className="col-sm-6 col-6 main-div">
            <div className="inner-div">
              <h3>38+</h3>
              <span>
                COMPLETED
                <br />
                PROJECTS
              </span>
              <p></p>
            </div>
          </div>
          <div className="col-sm-6 col-6 main-div">
            <div className="inner-div">
              <h3>21+</h3>
              <span>
                HAPPY
                <br />
                CUSTOMERS
              </span>
              <p></p>
            </div>
          </div>
          <div className="col-sm-6 col-6 main-div">
            <div className="inner-div">
              <h3>12+</h3>
              <span>
                achievement
                <br />
                so far
              </span>
              <p></p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
