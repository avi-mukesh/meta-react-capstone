import React from "react";
import { Hero } from "../../shared/Hero";
import { useNavigate } from "react-router-dom";

const ConfirmReservationPage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Hero title="Reservation confirmed">
        <button className="button" onClick={() => navigate("/")}>
          Back to home
        </button>
      </Hero>
    </main>
  );
};

export default ConfirmReservationPage;
