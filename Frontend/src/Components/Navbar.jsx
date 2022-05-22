import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/">Get-a-mentor</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/domain" className="nav-link">
                  Domain Select
                </Link>
              </li>
            </ul>
            <Link to="/login">
              <button
                type="button"
                className="btn btn-outline-secondary"
                style={{ marginRight: "0.5rem" }}
              >
                Login
              </button>
            </Link>

            <Link to="/signup-mentee">
              <button className="btn btn-outline-success me-2" type="button">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
