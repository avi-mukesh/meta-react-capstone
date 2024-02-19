import React from "react";
import logo from "../images/logo.png";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  const doormatNavLinks = [
    { title: "Home", path: "/home" },
    { title: "About", path: "/about" },
    { title: "Menu", path: "/menu" },
    { title: "Reservations", path: "/reservations" },
    { title: "Order Online", path: "/order" },
    { title: "Log In", path: "/login" },
  ];

  const contactLinks = [
    { title: "Address", path: "https://maps.google.com" },
    { title: "Phone", path: "094833 298353" },
    { title: "Email", path: "mailto: contact@littlelemon.com" },
  ];

  const socialLinks = [
    { title: "Facebook", path: "https://facebook.com" },
    { title: "Instagram", path: "https//instagram.com" },
  ];

  return (
    <footer className="footer">
      <section className="footer-column">
        <img className="logo" src={logo} alt="Little Lemon logo." />
      </section>

      <FooterColumn title="Doormat Navigation" links={doormatNavLinks} />
      <FooterColumn title="Contact" links={contactLinks} />
      <FooterColumn title="Social Media links" links={socialLinks} />
    </footer>
  );
};

export default Footer;
