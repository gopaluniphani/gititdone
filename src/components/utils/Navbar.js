import M from "materialize-css";

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  useEffect(() => {
    let elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  });

  return (
    <nav className="black" role="navigation">
      <div className="nav-wrapper container">
        <Link id="logo-container" to="/" className="brand-logo">
          GetItDone
        </Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/lawyers">Lawyers</Link>
          </li>
          <li>
            <Link to="/doctors">Doctors</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        <ul id="nav-mobile" className="sidenav">
          <li>
            <Link className="sidenav-close" to="/lawyers">
              Lawyers
            </Link>
          </li>
          <li>
            <Link className="sidenav-close" to="/doctors">
              Doctors
            </Link>
          </li>
          <li>
            <Link className="sidenav-close" to="/register">
              Register
            </Link>
          </li>
          <li>
            <Link className="sidenav-close" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
        <Link to="#" data-target="nav-mobile" className="sidenav-trigger">
          <i className="material-icons" style={{ color: "white" }}>
            menu
          </i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
