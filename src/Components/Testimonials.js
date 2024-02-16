import React from "react";
import testimonials from "../testimonials";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section>
      {testimonials.map((test) => (
        <TestimonialCard testimonial={test} />
      ))}
    </section>
  );
};

export default Testimonials;
