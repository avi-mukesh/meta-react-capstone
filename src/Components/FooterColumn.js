import React from "react";

const FooterColumn = ({ title, links }) => {
  return (
    <section>
      <h2>{title}</h2>
      {links.map((link) => (
        <a href={link.path}>{link.title}</a>
      ))}
    </section>
  );
};

export default FooterColumn;
