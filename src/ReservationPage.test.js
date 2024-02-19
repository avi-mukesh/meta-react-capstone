import { render, screen } from "@testing-library/react";
import TableDetailsFormSection from "./Components/TableDetailsFormSection";

test("home page heading", () => {
  const bookingInfo = {
    date: new Date(),
    time: "17:30",
    numPeople: 1,
    joiningFor: "food-and-drinks",
    sittingLocation: "outside",
    occasion: "none",
    comments: "",
  };

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

  render(
    <TableDetailsFormSection
      bookingInfo={bookingInfo}
      setBookingInfo={setBookingInfo}
      availableTimes={availableTimes}
      dispatch={dispatch}
    />
  );
  const tableDetails = screen.getByText("Table Details");
  expect(tableDetails).toBeInTheDocument();
});
