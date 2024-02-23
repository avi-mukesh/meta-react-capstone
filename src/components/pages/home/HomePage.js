import React from "react";
import { Hero } from "../../shared/Hero";
import restaurantfood from "../../../images/restaurantfood.webp";
import { Link } from "react-router-dom";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Information from "./Information";

const HomePage = () => {
  return (
    <main>
      <Hero
        title="Little Lemon"
        subtitle="Little Lemon is the best restaurant in Chicago. You can find so many lemons and crap hehe."
        image={restaurantfood}
        mainsubtitle="Chicago"
      >
        <Link to="/reservations" className="button">
          Make Reservation
        </Link>
      </Hero>
      <Specials />
      <Testimonials />
      <Information />
    </main>
  );
};

export default HomePage;
