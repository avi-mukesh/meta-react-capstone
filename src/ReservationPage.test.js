import { fireEvent, render, screen } from "@testing-library/react";
import TableDetailsFormSection from "./Components/TableDetailsFormSection";
import { Formik } from "formik";
import userEvent from "@testing-library/user-event";
import PersonalDetailsFormSection from "./Components/PersonalDetailsFormSection";
import { wait } from "@testing-library/user-event/dist/utils";
import * as Yup from "yup";
import AddressDetailsForm from "./Components/AddressDetailsForm";
import { useState } from "react";
import { submitAPI } from "./utils/mockApi";
import PaymentDetailsFormSection from "./Components/PaymentDetailsFormSection";
import exp from "constants";

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
    }
  };

  return (
    <main id="reservationPage">
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
    </main>
  );
};

test("form Table Details heading", () => {
  render(<ReservationsPage availableTimes={["17:00"]} dispatch={jest.fn()} />);
  const tableDetails = screen.getByText("Table Details");
  expect(tableDetails).toBeInTheDocument();
});

// this doesn't work
test("num input set to 6", () => {
  render(<ReservationsPage availableTimes={["17:00"]} dispatch={jest.fn()} />);
  const numInput = screen.getByLabelText("Number of people");
  fireEvent.change(numInput, { target: { value: "1" } });
  expect(numInput.value).toBe(6);
});

// this doesn't work
test("first name field is required", async () => {
  render(<ReservationsPage availableTimes={["17:00"]} dispatch={jest.fn()} />);
  const firstNameInput = screen.getByLabelText("First name");
  fireEvent.click(firstNameInput);
  fireEvent.blur(firstNameInput);
  await wait(100);
  const firstNameInputErrorText = screen.getByTestId("firstNameError");
  expect(firstNameInputErrorText).toBeInTheDocument();
});

test("address line 1 is required", () => {
  render(<ReservationsPage availableTimes={["17:00"]} dispatch={jest.fn()} />);
  const addressLineOne = screen.getByLabelText("Line 1");
  expect(addressLineOne).toBeRequired();
});

test("first name is required", () => {
  render(<ReservationsPage availableTimes={["17:00"]} dispatch={jest.fn()} />);
  const firstName = screen.getByLabelText("First name");
  expect(firstName).toBeRequired();
});

test("yup validation", async () => {
  const errors = await ReservationSchema.validate(
    {
      date: new Date(Date.now()),
      time: "17:00",
      numPeople: 0,
      joiningFor: "drinks",
      sittingLocation: "outside",
      occasion: "birthday",
      comments: "rgrg",
      firstName: "hyg",
      lastName: "rgrg",
      email: "avimukesh10@gmail.com",
      addressLineOne: "hy",
      addressLineTwo: "",
      addressLineThree: "",
      city: "irgh",
      county: "frgrg",
      country: "france",
      postcode: "ME8 6PT",
      cardNum: "0000111122223333",
      expiryDateMonth: 4,
      expiryDateYear: 2025,
      cvc: "111",
    },
    { abortEarly: false }
  ).catch((err) => err.toString());

  expect(errors.includes("1 error")).toBe(true);
});
