import React from "react";

function Experience() {
  return (
    <React.Fragment>
      <h2 className="sub-head-tag">Experience</h2>
      <div className="history-main">
        <ul>
          <li>
            <div className="bg-icon ">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <span>2022- Present</span>
            <h5>
              Full Stack Developer<span> - Futura Labs</span>
            </h5>
            <p>
              Futura Labs is an IT training facility in Calicut that provides
              upskilling services to strengthen and update one's abilities in
              line with current professional trends.
            </p>
          </li>
          <li>
            <div className="bg-icon ">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <span>2021-2022</span>
            <h5>
              Frontend Developer<span> - SilverHost Web Solution</span>
            </h5>
            <p>
              SilverHost is a creative website design firm where I worked with
              web designers, back-end developers, and UX designers to create,
              test, and enhance websites.
            </p>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Experience;
