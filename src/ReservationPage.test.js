import { fireEvent, render, screen } from "@testing-library/react";
import TableDetailsFormSection from "./Components/TableDetailsFormSection";
import { Formik } from "formik";
import userEvent from "@testing-library/user-event";
import PersonalDetailsFormSection from "./Components/PersonalDetailsFormSection";
import { wait } from "@testing-library/user-event/dist/utils";

const TableDetailsFormSectionMock = () => {
  const bookingInfo = {
    date: new Date(),
    time: "17:30",
    numPeople: 1,
    joiningFor: "food-and-drinks",
    sittingLocation: "outside",
    occasion: "none",
    comments: "",
  };
  const errors = {
    date: "",
    time: "",
    numPeople: "",
    joiningFor: "",
    sittingLocation: "",
    occasion: "",
    comments: "",
  };
  const touched = { ...errors };
  const setBookingInfo = () => {};
  const availableTimes = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
  ];
  const dispatch = () => {};

  return (
    <Formik>
      <TableDetailsFormSection
        bookingInfo={bookingInfo}
        setBookingInfo={setBookingInfo}
        availableTimes={availableTimes}
        dispatch={dispatch}
        touched={touched}
        errors={errors}
        setFieldValue={() => {}}
      />
    </Formik>
  );
};
const PersonalDetailsFormSectionMock = () => {
  const personInfo = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const errors = { ...personInfo, firstName: "Required" };
  const touched = { ...personInfo, firstName: true };
  const setPersonInfo = () => {};
  return (
    <Formik>
      <PersonalDetailsFormSection
        personInfo={personInfo}
        setPersonInfo={setPersonInfo}
        touched={touched}
        errors={errors}
        setFieldValue={() => {}}
      />
    </Formik>
  );
};

test("form Table Details heading", () => {
  render(TableDetailsFormSectionMock());
  const tableDetails = screen.getByText("Table Details");
  expect(tableDetails).toBeInTheDocument();
});

// this doesn't work
test("num input set to 6", () => {
  render(TableDetailsFormSectionMock());
  const numInput = screen.getByLabelText("Number of people");
  fireEvent.change(numInput, { target: { value: "1" } });
  expect(numInput.value).toBe(6);
});

// this doesn't work
test("first name field is required", async () => {
  render(PersonalDetailsFormSectionMock());
  const firstNameInput = screen.getByLabelText("First name");
  fireEvent.click(firstNameInput);
  fireEvent.blur(firstNameInput);
  await wait(100);
  const firstNameInputErrorText = screen.getByTestId("firstNameError");
  expect(firstNameInputErrorText).toBeInTheDocument();
});
