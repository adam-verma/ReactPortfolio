import React from "react";
// import { Link } from "react-router-dom";
import { Link, animateScroll as scroll} from "react-scroll";
import { useState, useEffect } from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="." onClick={()=> scroll.scrollToTop()}>
          Adam Verma
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                className={
                  window.location.href === "" || window.location.href === "home"
                  ? "nav-link active"
                  : "nav-link"}
                to= "home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                window.location.href === "about" ? "nav-link active" : "nav-link"}
                to= "about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                window.location.href === "projects" ? "nav-link active" : "nav-link"}
                to= "projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                window.location.href === "contact" ? "nav-link active" : "nav-link"}
                to= "contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;
