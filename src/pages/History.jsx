import React from "react";
import Education from "../components/Education";
import Experience from "../components/Experience";

function Histtory() {
  return (
    <React.Fragment>
      <h1 className="inner-head text-center">EXPERIENCE & EDUCATION</h1>
      <div className="row align-items-center">
        <div className="col-lg-6 col-sm-12">
          <Education />
        </div>
        <div className="col-lg-6 col-sm-12">
          <Experience />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Histtory;
