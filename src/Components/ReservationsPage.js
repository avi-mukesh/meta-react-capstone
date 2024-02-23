import React, { useState } from "react";
import { Hero } from "./Hero";
import marioadrian from "../images/mario-adrian.webp";
import TableDetailsFormSection from "./TableDetailsFormSection";
import PersonalDetailsFormSection from "./PersonalDetailsFormSection";
import AddressDetailsForm from "./AddressDetailsForm";
import PaymentDetailsFormSection from "./PaymentDetailsFormSection";
import { submitAPI } from "../utils/mockApi";
import { useNavigate } from "react-router-dom";
import { Field, Formik, validateYupSchema } from "formik";
import * as Yup from "yup";

const ReservationSchema = Yup.object().shape({
  date: Yup.date().required("Required"),
  time: Yup.string().test("not empty", "Time is required", (value) => !!value),
  numPeople: Yup.number()
    .min(1, "Need at least one person")
    .max(6, "Too many people"),
  comments: Yup.string().max(200, "Comment is too long"),
  firstName: Yup.string().max(64, "First name too long").required("Required"),
  lastName: Yup.string().max(64, "Last name too long").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  line1: Yup.string().max(64).required("Required"),
  line2: Yup.string().max(32, "Address Line 2 is too long"),
  line3: Yup.string().max(32, "Address Line 3 is too long"),
  city: Yup.string().max(32).required("Required"),
  county: Yup.string().max(32),
  postcode: Yup.string()
    .matches(/[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i, "Postcode is invalid")
    .required("Required"),
  cardNum: Yup.string()
    .matches(/\d{16}/i, "Card number must be 16 digits")
    .required("Required"),
  cvc: Yup.string().matches(/\d{3}/i, "CVC must be 3 digits"),
});

const ReservationsPage = ({ availableTimes, dispatch }) => {
  const navigate = useNavigate();
  const [bookingInfo, setBookingInfo] = useState({
    date: "",
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
    expiryDateMonth: 4,
    expiryDateYear: 2025,
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

      <Formik
        initialValues={{
          ...bookingInfo,
          ...personInfo,
          ...addressInfo,
          ...paymentInfo,
        }}
        validationSchema={ReservationSchema}
        onSubmit={makeReservation}
      >
        {({
          errors,
          touched,
          setFieldValue,
          validateForm,
          setFieldError,
          setFieldTouched,
        }) => (
          <>
            <TableDetailsFormSection
              availableTimes={availableTimes}
              dispatch={dispatch}
              bookingInfo={bookingInfo}
              setBookingInfo={setBookingInfo}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
            />
            <PersonalDetailsFormSection
              personInfo={personInfo}
              setPersonInfo={setPersonInfo}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
            />
            <AddressDetailsForm
              addressInfo={addressInfo}
              setAddressInfo={setAddressInfo}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
            />
            <PaymentDetailsFormSection
              paymentInfo={paymentInfo}
              setPaymentInfo={setPaymentInfo}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
            />
            <button
              className="button"
              type="submit"
              onClick={() =>
                validateForm().then((errors) => {
                  if (Object.keys(errors).length === 0) {
                    makeReservation();
                  } else {
                    for (let errKey in errors) {
                      console.log(errKey, errors[errKey]);
                      setFieldError(errKey, errors[errKey]);
                      setFieldTouched(errKey, true);
                    }
                    console.log("form errors");
                  }
                })
              }
            >
              Make Reservation
            </button>
          </>
        )}
      </Formik>

      {/* <form>
        <PaymentDetailsFormSection
          paymentInfo={paymentInfo}
          setPaymentInfo={setPaymentInfo}
        />
        <button className="button" type="button" onClick={makeReservation}>
          Make Reservation
        </button>
      </form> */}
    </main>
  );
};

export default ReservationsPage;
