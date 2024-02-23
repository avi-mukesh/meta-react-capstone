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
          </li>
          <li>
            <Link to="/under_construction">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/under_construction">Order online</Link>
          </li>
          <li>
            <Link to="/under_construction">Login</Link>
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
        <label
          aria-label="Hamurger toggle click"
          htmlFor="menu-toggle"
          className="menu-bar-container"
        >
          <div className="menu-bar"></div>
        </label>
      </div>
    </>
  );
};

export default Nav;
