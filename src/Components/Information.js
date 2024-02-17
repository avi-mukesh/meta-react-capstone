import React from "react";
import image1 from "../images/restaurant.webp";
import image2 from "../images/mario-adrian2.webp";

const Information = () => {
  return (
    <section id="information">
      <div className="information-title-container">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>
      <div className="information-image-container">
        <img src={image1} alt="Mario and Adrian cheffing it up." />
        <img src={image2} alt="Mario and Adrian cheffing it up." />
      </div>
    </section>
  );
};

export default Information;
