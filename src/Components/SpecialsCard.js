import React from "react";

const SpecialsCard = ({ special }) => {
  return (
    <article className="specials-card">
      <div className="specials-card-image">
        <img src={special.image} alt={special.name} />
      </div>
      <div className="specials-card-header">
        <h3>{special.name}</h3>
        <p>£{special.cost}</p>
      </div>
      <div className="specials-card-body">
        <p>{special.description}</p>
      </div>
      <div className="specials-card-footer">
        <p>Order a delivery</p>
      </div>
    </article>
  );
};

export default SpecialsCard;
