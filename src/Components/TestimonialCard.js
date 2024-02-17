import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const TestimonialCard = ({ testimonial }) => {
  const stars = Array.apply(null, Array(testimonial.rating))
    .map(function () {})
    .map((_) => <FontAwesomeIcon icon={faStar} />);

  return (
    <article className="testimonial-card">
      <div className="testimonial-card-header">
        <span className="testimonial-rating">{stars}</span>
      </div>
      <div className="testimonial-card-person">
        <img src={testimonial.image} alt={testimonial.name} />
        <p>{testimonial.name}</p>
      </div>
      <div className="testimonial-card-text">
        <p>{testimonial.text}</p>
      </div>
    </article>
  );
};

export default TestimonialCard;
