import React from "react";

export const Hero = ({ title, subtitle, image, children, mainsubtitle }) => {
  return (
    <section className="hero">
      <div className="hero-title-container">
        <h1>{title}</h1>
        {mainsubtitle && <h2>{mainsubtitle}</h2>}
        <p>{subtitle}</p>
        {children}
      </div>
      <div className="hero-image-container">
        <img src={image} alt="Mario and Adrian cheffing it up." />
      </div>
    </section>
  );
};
