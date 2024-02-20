import React, { useState } from "react";
import { Hero } from "./Hero";
import marioadrian from "../images/mario-adrian.webp";
import TableDetailsFormSection from "./TableDetailsFormSection";
import PersonalDetailsFormSection from "./PersonalDetailsFormSection";
import AddressDetailsForm from "./AddressDetailsForm";
import PaymentDetailsFormSection from "./PaymentDetailsFormSection";
import { submitAPI } from "../utils/mockApi";
import { useNavigate } from "react-router-dom";

const ReservationsPage = ({ availableTimes, dispatch }) => {
  const navigate = useNavigate();

  const [bookingInfo, setBookingInfo] = useState({
    date: new Date(),
    time: "17:30",
    numPeople: 1,
    joiningFor: "food-and-drinks",
    sittingLocation: "outside",
    occasion: "none",
    comments: "",
  });

  const [personInfo, setPersonInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [addressInfo, setAddressInfo] = useState({
    line1: "",
    line2: "",
    line3: "",
    city: "",
    county: "",
    country: "france",
    postcode: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNum: "",
    expiryDateMonth: "4",
    expiryDateYear: "2025",
    cvc: 0,
  });

  const makeReservation = () => {
    if (
      submitAPI({
        ...bookingInfo,
        ...personInfo,
        ...addressInfo,
        ...paymentInfo,
      })
    ) {
      navigate("/confirm_reservation");
    }
  };

  return (
    <main id="reservationPage">
      <Hero
        title="Reservations"
        subtitle="Simple and easily make a reservation in advance to guarantee a table upon arrival."
        image={marioadrian}
      />

      <form>
        <TableDetailsFormSection
          availableTimes={availableTimes}
          dispatch={dispatch}
          bookingInfo={bookingInfo}
          setBookingInfo={setBookingInfo}
        />
        <PersonalDetailsFormSection
          personInfo={personInfo}
          setPersonInfo={setPersonInfo}
        />
        <AddressDetailsForm
          addressInfo={addressInfo}
          setAddressInfo={setAddressInfo}
        />
        <PaymentDetailsFormSection
          paymentInfo={paymentInfo}
          setPaymentInfo={setPaymentInfo}
        />
        <button className="button" type="button" onClick={makeReservation}>
          Make Reservation
        </button>
      </form>
    </main>
  );
};

export default ReservationsPage;
