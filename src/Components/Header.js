import React from "react";
import Nav from "./Nav";
import { logo } from "../images/logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Little Lemon logo" />
      <Nav />
    </header>
  );
};

export default Header;
