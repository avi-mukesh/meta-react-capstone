import React from "react";
import testimonials from "../testimonials";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <div className="card-container">
        {testimonials.map((test) => (
          <TestimonialCard testimonial={test} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;