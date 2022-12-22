import React from "react";

function Education() {
  return (
    <React.Fragment>
      <h2 className="sub-head-tag">Education</h2>
      <div className="history-main">
        <ul>
          <li>
            <div className="bg-icon ">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <span>2018-2021</span>
            <h5>
              BCA<span> - AJK College of Arts & Science</span>
            </h5>
            <p>
              Computer Application is the study of the theoretical and practical
              aspects of computer technology and its usage.
            </p>
          </li>
          <li>
            <div className="bg-icon ">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <span>2015-2018</span>
            <h5>
              Commerce CA<span> - HSS Ananganadi</span>
            </h5>
            <p>
              It's a blend of commerce and computer applications for business
              disciplines that necessitate computer competence.
            </p>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Education;
