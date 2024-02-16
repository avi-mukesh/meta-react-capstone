import React from "react";

const FooterColumn = ({ title, links }) => {
  return (
    <section className="footer-column">
      <h2>{title}</h2>
      <div className="footer-links">
        {links.map((link) => (
          <a href={link.path}>{link.title}</a>
        ))}
      </div>
    </section>
  );
};

export default FooterColumn;
