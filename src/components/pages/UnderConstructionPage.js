import React from "react";
import { Hero } from "../shared/Hero";
import { Link } from "react-router-dom";

const UnderConstructionPage = () => {
  return (
    <main>
      <Hero title="Under Construction">
        <Link to="/" className="button">
          Home
        </Link>
      </Hero>
    </main>
  );
};

export default UnderConstructionPage;
