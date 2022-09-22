import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  let { title } = props;

  let dashboard = JSON.parse(sessionStorage.getItem("dashboard"));
  console.log(dashboard);
  let link = null;
  if (dashboard === "admin") {
    console.log("inside admin block");
    link = "/adminDashboard";
  } else if (dashboard === "patient") {
    console.log("inside patient block");
    link = "/patientDashboard";
  } else if (dashboard === "doctor") {
    console.log("inside doctor block");
    link = "/doctorDashboard";
  } else {
    console.log("inside else block");
    link = "/";
  }
  return (
    <nav className="navbar navbar-collapse navbar-expand-lg  bg-light sticky-top shadow2">
      <div className="container">
        <div className="navbar-header">
          <NavLink className="navbar-brand text-capitalize appName" to="/">
            {title}
          </NavLink>
        </div>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" to={link}>
              <button className=" navigi ">Home</button>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/about">
              <button className="  navigi" id="About">
                About Us
              </button>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              <button className=" navigi"> Contact Us</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
