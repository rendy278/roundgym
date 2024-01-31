import React from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import { IoMdClose } from "react-icons/io";
import { PiCirclesThreePlusBold } from "react-icons/pi";

import { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <h5>
            Round<span className="gym__logo">Gym</span>
          </h5>
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"} `}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toogle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <IoMdClose /> : <PiCirclesThreePlusBold />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
