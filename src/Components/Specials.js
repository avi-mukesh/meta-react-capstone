import React from "react";
import specials from "../specials";
import SpecialsCard from "./SpecialsCard";

const Specials = () => {
  return (
    <section>
      {specials.map((sp) => (
        <SpecialsCard special={sp} />
      ))}
    </section>
  );
};

export default Specials;
