import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ backgroundColor: "#1F2A40" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <strong>
            <h4 style={{ color: "lightblue" }}>YP</h4>
          </strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item navStyle ">
              <Link
                className="nav-link"
                aria-current="page"
                to="/register"
                style={{ color: "lightgreen" }}
              >
                Register
              </Link>
            </li>
            <li className="nav-item navStyle ">
              <Link
                className="nav-link"
                aria-current="page"
                to="/signIn"
                style={{ color: "lightgreen" }}
              >
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link navStyle "
                aria-current="page"
                to="/about"
                style={{ color: "lightgreen" }}
              >
                About
              </Link>
            </li>
            <li className="nav-item navStyle ">
              <Link
                className="nav-link"
                aria-current="page"
                to="/contactUs"
                style={{ color: "lightgreen" }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
