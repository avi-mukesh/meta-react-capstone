import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Nav = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <nav
        className="navbar"
        style={{
          height: isMobile ? (navbarExpanded ? "auto" : "0") : "auto",
          padding: navbarExpanded ? "2rem" : "0",
        }}
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
            {/* <a href="home">Home</a> */}
          </li>
          <li>
            <a href="menu">Menu</a>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
            {/* <a href="reservations">Reservations</a> */}
          </li>
          <li>
            <a href="/orderonline">Order Online</a>
          </li>
          <li>
            <a href="/login">Log In</a>
          </li>
        </ul>
      </nav>
      <div className="hamburger">
        <input
          checked={navbarExpanded}
          onChange={() => setNavbarExpanded((s) => !s)}
          type="checkbox"
          id="menu-toggle"
        />
        <label htmlFor="menu-toggle" className="menu-bar-container">
          <div className="menu-bar"></div>
        </label>
      </div>
    </>
  );
};

export default Nav;
