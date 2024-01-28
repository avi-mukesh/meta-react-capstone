import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="menu">Menu</a>
        </li>
        <li>
          <a href="reservations">Reservations</a>
        </li>
        <li>
          <a href="/orderonline">Order Online</a>
        </li>
        <li>
          <a href="/login">Log In</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
