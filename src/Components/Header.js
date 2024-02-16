import React from "react";
import Nav from "./Nav";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Little Lemon logo" />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
