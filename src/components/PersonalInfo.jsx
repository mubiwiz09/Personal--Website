import React from "react";
import { NavLink } from "react-router-dom";

const PersonalInfo = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("CV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV.pdf";
        alink.click();
      });
    });
  };
  return (
    <React.Fragment>
      <h2 className="sub-head-tag">Personal Infos</h2>
      <ul className="p-info">
        <li>
          <span>First Name : </span>
          <span>Muhammed</span>
        </li>
        <li>
          <span>Last Name : </span>
          <span>Mubashir</span>
        </li>
        <li>
          <span>Age : </span>
          <span>22 Years</span>
        </li>
        <li>
          <span>Nationality : </span>
          <span>Indian</span>
        </li>
        <li>
          <span>Freelance : </span>
          <span className="available">Available</span>
        </li>
        <li>
          <span> Address : </span>
          <span>Kerala, India</span>
        </li>
        <li>
          <span>Phone : </span>
          <span>+91 7559 096 327</span>
        </li>
        <li>
          <span>Email : </span>
          <span>m.mubashir@gmail.com</span>
        </li>
        <li>
          <span>Skype : </span>
          <span>mubashir.muhammed.639</span>
        </li>
        <li>
          <span>Langages : </span>
          <span>English, Malayalam</span>
        </li>
      </ul>

      <button onClick={onButtonClick} className="main-btn p-0">
        Download CV
      </button>
      <NavLink to="/history" className="main-btn mx-md-3 mx-2">
        History
      </NavLink>
      <NavLink to="/skills" className="main-btn">
        Skills
      </NavLink>
    </React.Fragment>
  );
};

export default PersonalInfo;
