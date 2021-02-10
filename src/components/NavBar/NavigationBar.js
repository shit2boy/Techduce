import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginButton from "../CustomButton/CustomButton";
import "./Navbar.css";
const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div className={(showNav ? "nav_itm" : "") + " navbar"}>
      <div className="toggle-holder">
        <Link to="/">
          {" "}
          <i class="fas fa-leaf"></i> Quillow
        </Link>
        <button class="nav_toggler" type="button" onClick={() => toggleNav()}>
          <i className="fas fa-align-left "></i>
        </button>
      </div>
      <ul className={(showNav ? "show-navbar" : "hide_item") + " nav_item"}>
        <li>
          <Link to="/">Courses</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div
        className={(showNav ? "show-navbar" : "hide_item") + " nav_item_auto"}
      >
        <LoginButton style={{ background: "#F3F6FB", color: "black" }}>
          Login
        </LoginButton>
      </div>
    </div>
  );
};

export default NavBar;
