import React from "react";
import specials from "../../../specials";
import SpecialsCard from "./SpecialsCard";

const Specials = () => {
  return (
    <section aria-label="Restaurant special dishes" id="specials">
      <header>
        <h2>This week's specials!</h2>
        <button className="button">Online Menu</button>
      </header>

      <div className="card-container">
        {specials.map((sp) => (
          <SpecialsCard special={sp} key={sp.name} />
        ))}
      </div>
    </section>
  );
};

export default Specials;
